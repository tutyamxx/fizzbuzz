// --| Fastest way and less code (and my favourite)
console.time("First");
for (let i = 1; i <= 100; i++)
{
    console.log(((i % 3) ? "" : "Fizz") + ((i % 5) ? "" : "Buzz") || i);
}
console.timeEnd("First"); // --| Average of: 20-22.753ms



// --| Not so fast way and more code
console.time("Second");
for (let i = 1; i <= 100; i++)
{
    let output = "";

    if (i % 3 === 0) output += "Fizz";
    else if (i % 5 === 0) output += "Buzz";

    console.log(output || i);
}
console.timeEnd("Second"); // --| Average of: 23-24.305ms