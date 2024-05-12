<?php
require 'database.php';
class ArtistaModel extends Database { 
    public function __construct() {
        parent::__construct(); // Llama al constructor de la clase padre (Database)
    }
    public function alta($datos) { 
        extract($datos);
        if (empty($nombre) || empty($nacionalidad)) {
            throw new Exception("Todos los datos son obligatorios", 10); 
        }
        $sql= "INSERT INTO artista VALUES (NULL, :nombre, :nacionalidad)";
        try{
            $stmt = $this->conexion->prepare($sql);
            $stmt->bindParam(':nombre', $nombre);
            $stmt->bindParam(':nacionalidad', $nacionalidad);
            //ejecutamos
            $stmt->execute();
            $id = $this->conexion->lastInsertId();
            return array('codigo' => '00', 'datos' => "Artista dado de alta con el id $id");
        }catch (PDOException $e) {
            if ($e->errorInfo[1]==1062) {
                throw new Exception('Este artista ya existe en la base de datos', 30); 
            }else{
                throw new Exception((string)$e->getMessage(), (int)$e->getCode());
            }
        }
    }
}
