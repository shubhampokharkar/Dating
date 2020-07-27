function checkEmail(str1)
          {
              var posat=str1.indexOf("@");
              var posdot=str1.indexOf(".");
          
          if(posat!=-1 && posdot!=-1)
          {
              if(posat>=1 && (posdot-posat)>=2 && (str1.length-1-posdot)>=2 && (str1.length-1-posdot)<=5)
              {
                return true;
              }
              else
              {
                return false;
              }
          }
          else
          {
          return false;
          }
          }
          const validateForm = (ev) =>{
               ev.preventDefault();
               var nam=document.myform.name.value;
               var gen=document.myform.gender.value;
               var age2=document.myform.age.value;
               var birth=document.myform.birthDate.value;
               var file=document.myform.fileToUpload.value;
               var email1=document.myform.email.value;
               var state2=document.myform.state.value;
               var mobile2=document.myform.mobile.value;
               var add=document.myform.address.value;
               if(nam=="" || nam==null)
               {
                  alert("Name should not be null");
               }
               else if(nam.length<3)
               {
                  alert("Name length should be less 3-30");
                  
               }
               else if(nam.length>30)
               {
                  alert("Name length should be 3-30");
                  
               }
               else if(isNaN(nam)==false)
               {
                  alert("Name should not be a numeric");
                  
               }
               else if(gen=="" || gen==null)
               {
               alert("Please select gender");
               }
               else if(age2=="" || age2==null)
               {
               alert("Age cannot be null");
               }
               else if(age2<10)
               {
                  alert("Age must be greater than 10");
                  
               }
               else if(birth=="" || birth==null)
               {
               alert("Please select birth date");
               }
               else if(state2=="" || state2==null)
               {
               alert("Please select the state");
               
               }
               else if(file=="" || file==null)
               {
               alert("Please select file");
               }
               else if(email1=="" || email1==null)
               {
               alert("Email cannot be empty");
               
               }
               else if(!checkEmail(email1))
               {
               alert("Email not valid");
               
               }
               else if(mobile2=="" || mobile2==null)
               {
               alert("Mobile number cannot be null");
               }
               else if(mobile2.length!=10)
               {
               alert("Please enter a 10 digit no");
               
               }
               else if(add=="" || add==null)
               {
               alert("Address cannot be null");
               }
               else
               {
                  alert("successfully registered");
                  document.querySelector("form").reset();
                  
               }
          }
          document.addEventListener("DOMContentLoaded", ()=>{
              document.getElementById("btna").addEventListener("click", validateForm);
          });