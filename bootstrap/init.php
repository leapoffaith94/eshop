<?php
/**
 * Created by PhpStorm.
 * User: chaoguo
 * Date: 3/6/18
 * Time: 5:38 PM
 */


//start session if it is not already started.
//if(!isset($_SESSION)) session_start();

//load environment variables
require_once __DIR__.'/../app/config/_env.php';

require_once __DIR__.'/../app/routing/routes.php';