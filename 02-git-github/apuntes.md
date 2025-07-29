# Git y GitHub: Repositorio, commit y versiones

## 1- Cuenta en GitHub
- correo electronico
-- factor 2FA

- crear repo
- crear archivo README.md
- realizar un commit del archivo README.md

## 2- Commit, VSCode y equipo
- creo un archivo app.js y realizo el commit
- si hago click sobre la barra de github y presiono .(punto) se abre una consola de vs code online
- dentro del repo en:
    - settings
        -collaborators: me permite agregar personas al proyecto

## 3- Trabajando localmente
- instalar git
- configurar git localmente:
    - git config --global user.name nombre usuario
    - git config --global user.email luciano@email.com
- puedo configurar mi editor de texto para git, sino usa el editor por defecto
    - git config --global code.editor nombreeditor 
- observar las configuraciones:
    - git config --list
- otros comandos:
    - pwd (Print Working Directory) (directorio donde me encuentro)
    - ls (List) (Muestra un listado de archivos)
    - cd nombre_carpeta (Change Directory) (me muevo a la carpeta indicada)
- comandos git:
    - git log (obtner una lista de los commmits)
    - git log --oneline (obtener el historial resumido)
    - git log -p (mucho mas detallado)
    - git log --author="user_name" (muestra los commit de ese usuario)
    - git clone (clonar repo)
    - git status (estado del archivo)
    - git add --all (agregar archivo al area de trabajo(Staging area))
    - git commit -m "mensaje" (guarda los cambios preparados en el repo local)
    - git push origin main (envia los cambios al repo en github)
    - git diff (muestra los cambios realizados en un archivo)
    - git restore --source id_commit nombre_archivo (me regresa a una version anterior a ese archivo)

## 4- Ramificaciones y merge
- creando ramas:
    - git checkout -b nombre_rama (creo una nueva rama)
    - git switch nombre_rama (me cambia a la rama indicada)
    - git merge (unir el contenido de las dos ramas)
para realizar el merge de dos ramas hago lo siguiente:
- en la rama main
    - git merge nombre_rama
    - git push origin main

## 5- Profundizando en Git y GitHub
- realizar la conexion entre github y mi pc creando el repositorio y creando una carpeta del proyecto en la pc:
    - git init (inicializo el proyecto en mi carpeta de pc)
    - creo un archivo index.html y realizo:
        - git add
        - git commit
    - al momento de realizar el push, debo realizar la conexion con el repo de github
        - git remote add origin url_repo
        - git remove -v (me muestra la conexion)
    - realizo el cambio de rama de master a main:
        - git branch -M main
    - realizo el push para subir mi proyecto al repo de github:
        - git push -u origin main


!pagina para obtener mas detalles: https://www.aluracursos.com/blog/iniciando-repositorio-con-git