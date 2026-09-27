<?php
echo strlen('wassup guys'); echo PHP_EOL;
echo str_word_count('wassup beijing'); echo PHP_EOL;

$txt = "wassup beijing, layo bayo jinxang jinxang chen du yo";
echo str_contains($txt,"ijing"); echo "\n";
echo str_contains($txt,"z"); echo PHP_EOL;

var_dump(str_contains($txt,"ijing"));
var_dump(str_contains($txt,"z"));
var_dump(str_contains($txt,"Ijing"));

echo strpos($txt,'beijing'); echo PHP_EOL;
# b(first) in beijing is in index 7

echo str_starts_with($txt, 'wassup'); echo PHP_EOL;
echo str_starts_with($txt, 'Wassup');

var_dump(str_starts_with($txt, 'wassup'));
var_dump(str_starts_with($txt,'Wassup'));

var_dump(str_ends_with($txt,'yo'));
var_dump(str_ends_with($txt,'Yo'));
?>