# Crear un proyecto

    - adonis new adonis-app

<!--  -->

# iniciar proyecto

    - adonis serve --dev

<!--  -->

# Creacion de modelos para Base de datos SQL

    ❯ adonis make:model cupcake --migration
        ✔ create app/Models/Cupcake.js
        ✔ create database/migrations/1681212255889_cupcake_schema.js

    - se debe instalar mysql y configurar el .evn

    ❯ adonis migration:run

<!--  -->

<!-- NEST -->

# creacion de modulos nuevos

    - nest generate module cats
    - nest generate controller cats
    - nest generate service cats
