let ChangeDarkModeMoon = document.querySelector('#moon');
let ChangeDarkModeSun=document.querySelector('#sun');
let ChangeDarkModeMoon1 = document.querySelector('#moon1');
let ChangeDarkModeSun2=document.querySelector('#sun2');
let zero = 0;
let htmlDarkMode= document.querySelector('#html');

ChangeDarkModeSun.style.display= "none";

ChangeDarkModeMoon.addEventListener('click',function(){
htmlDarkMode.classList.add("dark");
});
ChangeDarkModeSun.addEventListener('click',function(){
htmlDarkMode.classList.remove("dark");
});

// if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
//     htmlDarkMode.documentElement.classList.add('dark')
//   } else {
//     htmlDarkMode.documentElement.classList.remove('dark')
//   }
  
//   // Whenever the user explicitly chooses light mode
//   localStorage.theme = 'light'
  
//   // Whenever the user explicitly chooses dark mode
//   localStorage.theme = 'dark'
  
//   // Whenever the user explicitly chooses to respect the OS preference
//   localStorage.removeItem('theme');
   
 function moon(){
     if(ChangeDarkModeMoon !== zero ){
        ChangeDarkModeMoon.style.display="none"; 
        ChangeDarkModeSun.style.display="block";
        } 
   };
   // ChangeDarkModeMoon.style.display="none";
   function sun(){
       if (ChangeDarkModeSun!==zero){
           ChangeDarkModeMoon.style.display="block"; 
           ChangeDarkModeSun.style.display="none";
        //    location.reload();
        }
       
   }


ChangeDarkModeSun2.style.display= "none";
ChangeDarkModeMoon1.addEventListener('click',function(){
 ChangeDarkModeMoon1.style.display = "none";
 ChangeDarkModeSun2.style.display = "block";
 htmlDarkMode.classList.add("dark");

});
ChangeDarkModeSun2.addEventListener('click',function(){
 ChangeDarkModeMoon1.style.display = "block";
 ChangeDarkModeSun2.style.display = "none";
 htmlDarkMode.classList.remove("dark");

});
 