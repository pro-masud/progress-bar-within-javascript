// get all elements here 
const input = document.getElementById("count");
const btn  = document.getElementById("btn");
const h2   = document.querySelector("h2");
const bar   = document.querySelector(".bar");


btn.onclick = () => {
  const countValue = input.value;
  bar.style.width = "100%";
  h2.innerHTML = countValue;
  let count = countValue;

  let int = setInterval(() => {
    count--;
    h2.innerHTML = count;

    bar.style.width = `${(100 * count) / countValue}%`;

    if( count <= 0 ){

      clearInterval(int);
    }


  }, 1000);
  
  input.reset();
}