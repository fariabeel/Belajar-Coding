<?php
if (isset($_GET['custom'])) {
echo htmlspecialchars($_GET['custom']). " " .htmlspecialchars($_GET['custom1']) . PHP_EOL;
}

if (isset($_GET['wow'])) {
    echo htmlspecialchars($_GET['wow']);
}
?>