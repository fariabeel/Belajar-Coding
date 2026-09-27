select productname, price * (inStock + inorder) from gaming;
select productname, price * (instock + coalesce(inorder, 0)) from gaming;
select productname, price * (instock + ifnull(inorder, 0)) from gaming;