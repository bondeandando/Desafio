<?php
    include_once('conexao.php');

    $firstName     = $_POST ['firstName'];
    $lastName      = $_POST ['lastName'];
    $participation = $_POST ['participation'];

    $query = "INSERT INTO desafio (firstName, lastName, participation) VALUES ('$firstName', '$lastName', '$participation');";
    $result_conn = mysqli_query($conn, $query);
?>