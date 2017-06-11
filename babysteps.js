var totalsum = 0;
for(var i = 2; i < process.argv.length; i++)
{
  totalsum += Number(process.argv[i]);
}
console.log(totalsum);
