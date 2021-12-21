			var a = 2;
            var b = 3;
            var c = "Test";
            var linebreak = "<br />";
         
            document.write("a + b = ");
            result = a + b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a - b = ");
            result = a - b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a / b = ");
            result = a / b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a % b = ");
            result = a % b;
            document.write(result);
            document.write(linebreak);
         
            document.write("a + b + c = ");
            result = a + b + c;
            document.write(result);
            document.write(linebreak);
         
            a = a++;
            document.write("a++ = ");
            result = a++;
            document.write(result);
            document.write(linebreak);
         
            b = b--;
            document.write("b-- = ");
            result = b--;
            document.write(result);
            document.write(linebreak);
			
			// so sanh
			
			document.write("(a & b) => ");
            result = (a & b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a | b) => ");
            result = (a | b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a ^ b) => ");
            result = (a ^ b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(~b) => ");
            result = (~b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a << b) => ");
            result = (a << b);
            document.write(result);
            document.write(linebreak);
         
            document.write("(a >> b) => ");
            result = (a >> b);
            document.write(result);
            document.write(linebreak);
			
			var h = 10;
            var e = "String";
            var linebreak = "<br />";
         
            result = (typeof e == "string" ? "B is String" : "B is Numeric");
            document.write("Result => ");
            document.write(result);
            document.write(linebreak);
         
            result = (typeof h == "string" ? "A is String" : "A is Numeric");
            document.write("Result => ");
            document.write(result);
            document.write(linebreak);
function callname(first, last)
         {
            var full;
            full = first + last;
            return full;
         }
         
         function tinhnang2()
         {
            var result;
            result = callname('aho', 'tana');
            document.write (result );
         }
function hopthoai(){
               var t = confirm("ban co muon tiep tuc khong ?");
               if( t == true ){
                  document.write ("toi muon");
                  return true;
               }
               else{
                  Document.write ("toi khong muon");
                  return false;
			   }
		}
function hopnhapchu(){
               var k = prompt("Enter your name : ", "your name here");
			  
               document.write("You have entered : " + k);
			   
			   
            }		