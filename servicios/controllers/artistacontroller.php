<?php
require '../../models/artistamodel.php'; //recordad que se encuentra en la carpeta models


echo "Hola desde controles!";

if (!$peticion = filter_input(INPUT_POST, 'peticion')) { 
    throw new Exception("Petición obligatoria", 10);
}
$artista = new ArtistaModel();

switch ($peticion) { 
    case 'A':
        try {
            $nombre = $_POST['nombre']; 
            $nacionalidad = $_POST['nacionalidad'];
            echo $nombre;
            if (!$nombre || !$nacionalidad) {
                throw new Exception("Nombre y nacionalidad son campos obligatorios", 20);
            }
            $datos = compact('nombre', 'nacionalidad');
            $respuesta = $artista->alta($datos);
        }catch(Exception $e) {
            $respuesta = array('codigo'=>$e->getCode(), 'error'=>$e->getMessage());
            echo json_encode($respuesta);
        }
        break;
    }