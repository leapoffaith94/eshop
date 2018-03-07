<?php
/**
 * Created by PhpStorm.
 * User: chaoguo
 * Date: 3/6/18
 * Time: 5:25 PM
 */

define('BASE_PATH', realpath(__DIR__.'/../../'));
require_once __DIR__.'/../../vendor/autoload.php';

$dotEnv = new \Dotenv\Dotenv(BASE_PATH);
$dotEnv->load();