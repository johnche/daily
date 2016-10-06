<?php

date_default_timezone_set('Europe/Oslo');
$dato = date('d') . '.' . date('m') . '.' . date('Y');
$tid = date('H:i:s', time() - date('Z'));

echo $tid;
?>
