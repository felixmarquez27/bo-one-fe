#!/bin/bash

# Script de despliegue para BO-ONE
# Uso: ./deploy.sh [dev|prod|stop|clean]

set -e

# Colores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Funciones de ayuda
log_info() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

log_warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

log_error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar que Docker está instalado
check_docker() {
    if ! command -v docker &> /dev/null; then
        log_error "Docker no está instalado"
        exit 1
    fi
    
    if ! command -v docker-compose &> /dev/null; then
        log_error "Docker Compose no está instalado"
        exit 1
    fi
    
    log_info "Docker y Docker Compose están instalados ✓"
}

# Despliegue en desarrollo
deploy_dev() {
    log_info "Iniciando despliegue en modo desarrollo..."
    
    docker-compose -f docker-compose.dev.yml down
    docker-compose -f docker-compose.dev.yml build
    docker-compose -f docker-compose.dev.yml up -d
    
    log_info "Servicios iniciados:"
    log_info "- Shell (Dev): http://localhost:2000"
    log_info "- Users (Dev): http://localhost:2001"
    
    log_info "Ver logs: docker-compose -f docker-compose.dev.yml logs -f"
}

# Despliegue en producción
deploy_prod() {
    log_info "Iniciando despliegue en modo producción..."
    
    docker-compose -f docker-compose.yml down
    docker-compose -f docker-compose.yml build --no-cache
    docker-compose -f docker-compose.yml up -d
    
    log_info "Esperando que los servicios estén listos..."
    sleep 5
    
    # Health checks
    if curl -f http://localhost:3000/health > /dev/null 2>&1; then
        log_info "✓ Shell está funcionando"
    else
        log_warn "✗ Shell no responde"
    fi
    
    if curl -f http://localhost:3001/health > /dev/null 2>&1; then
        log_info "✓ Users está funcionando"
    else
        log_warn "✗ Users no responde"
    fi
    
    log_info "Servicios iniciados:"
    log_info "- Shell (Prod): http://localhost:3000"
    log_info "- Users (Prod): http://localhost:3001"
    log_info "- Proxy: http://localhost:80"
    
    log_info "Ver logs: docker-compose -f docker-compose.yml logs -f"
}

# Detener servicios
stop_services() {
    log_info "Deteniendo servicios..."
    
    docker-compose -f docker-compose.yml down
    docker-compose -f docker-compose.dev.yml down
    
    log_info "Servicios detenidos ✓"
}

# Limpieza completa
clean_all() {
    log_warn "¿Está seguro de que desea eliminar todos los contenedores, imágenes y volúmenes? (y/N)"
    read -r response
    
    if [[ "$response" =~ ^([yY][eE][sS]|[yY])$ ]]; then
        log_info "Limpiando..."
        
        docker-compose -f docker-compose.yml down -v
        docker-compose -f docker-compose.dev.yml down -v
        
        log_info "Eliminando imágenes..."
        docker rmi bo-one-shell bo-one-users 2>/dev/null || true
        
        log_info "Limpieza completada ✓"
    else
        log_info "Operación cancelada"
    fi
}

# Ver logs
show_logs() {
    if [ "$1" == "dev" ]; then
        docker-compose -f docker-compose.dev.yml logs -f
    else
        docker-compose -f docker-compose.yml logs -f
    fi
}

# Mostrar ayuda
show_help() {
    cat << EOF
Script de despliegue para BO-ONE

Uso: ./deploy.sh [comando]

Comandos:
  dev       Desplegar en modo desarrollo (hot-reload)
  prod      Desplegar en modo producción
  stop      Detener todos los servicios
  clean     Limpieza completa (elimina contenedores, imágenes y volúmenes)
  logs      Ver logs (dev/prod)
  help      Mostrar esta ayuda

Ejemplos:
  ./deploy.sh dev       # Iniciar en desarrollo
  ./deploy.sh prod      # Iniciar en producción
  ./deploy.sh stop      # Detener servicios
  ./deploy.sh clean     # Limpieza completa

EOF
}

# Main
main() {
    check_docker
    
    case "$1" in
        dev)
            deploy_dev
            ;;
        prod)
            deploy_prod
            ;;
        stop)
            stop_services
            ;;
        clean)
            clean_all
            ;;
        logs)
            show_logs "$2"
            ;;
        help|--help|-h)
            show_help
            ;;
        *)
            log_error "Comando no reconocido: $1"
            show_help
            exit 1
            ;;
    esac
}

# Ejecutar
main "$@"

