<?php

class Database {
    protected $conexion;
    public function __construct() {
    try {
        //configura conexion
        $dsn = "mysql:host=localhost; dbname=discos; charset=UTF8";
        $username = 'root';
        $password = 'password';
        //crea PDO
        $this->conexion = new PDO($dsn, $username, $password); 
        $this->conexion->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION); 
    } catch (PDOException $e) {
    throw new Exception((string)$e->getMessage(), (int)$e->getCode());
    }}}
