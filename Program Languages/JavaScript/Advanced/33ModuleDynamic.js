async function run() { // lazy load
    const module = await import("./32Sub.js")
    let result = module.plus(2,3) // plus function in 32sub file
    console.log(result)
}
run()

// uses for
// Lazy Loading - Load code only when it is needed
// Performance Optimization - Reduce initial load size for faster page load
// Conditional Imports - Import different modules based on conditions.

if (true) {
    const module = await import("./32Sub.js")
    console.log(module.multiply(3,2))
}

import('./32Sub.js').then(module => {console.log(module.multiply(3,3))})