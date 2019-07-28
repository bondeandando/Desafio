<?php
    include_once('conexao.php');

    $query = "SELECT firstName, lastName, participation FROM desafio ;";
    $result_conn = mysqli_query($conn, $query);
?>