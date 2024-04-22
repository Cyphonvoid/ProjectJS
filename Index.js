class LED{
   constructor(width, height){
     this._led = document.createElement('div')
     this.width = width; 
     this.height = height; 
     this.color = "green";
     this.border_color = "1px solid lightgrey";
     this._led.style.backgroundColor = "green";
     this._led.style.width = this.width + 'px';
     this._led.style.height = this.height + 'px'; 
     this._led.style.border = "1px solid lightgrey"
     this._led.style.position = "absolute";
     

     this._led.style.borderTopLeftRadius = 0 + 'px'
     this._led.style.borderTopRightRadius = 0 + 'px'
     this._led.style.borderBottomLeftRadius = 0 + 'px'
     this._led.style.borderBottomRightRadius = 0 + 'px'

     this._state = false;
     document.body.appendChild(this._led);
   }
   
   Size(Len, Wid){
      this._led.style.width = Wid + 'px';
      this._led.style.height = Len + 'px'
   }

   TurnOn(){
     this._led.style.backgroundColor = this.color; 
     this._led.style.border = "transparent"
     this._state = true; 
   }
   
   RoundCorner(corner, value){
      
      if(corner == 'All'){
         this._led.style.borderTopLeftRadius = value + 'px'
         this._led.style.borderTopRightRadius = value + 'px'
         this._led.style.borderBottomLeftRadius = value + 'px'
         this._led.style.borderBottomRightRadius = value + 'px'
      }

      else if(corner == 'TopLeft'){
         this._led.style.borderTopLeftRadius = value + 'px'
      }

      else if(corner == 'TopRight'){
         this._led.style.borderTopRightRadius = value + 'px'
      }

      else if(corner == 'BottomLeft'){
         this._led.style.borderBottomLeftRadius = value + 'px'
      }

      else if(corner == 'BottomRight'){
         this._led.style.borderBottomRightRadius = value + 'px'
      }

   }

   TurnOff(){
     this._led.style.backgroundColor = "transparent";
     this._led.style.border = this.border_color
     this._state = false; 
   }
 
   MoveTo(x, y){
       this._led.style.top = y + 'px'; 
       this._led.style.left = x + 'px'; 
   }
 
   GetState(){
       return this._state; 
   }
 
   SetColor(color){
     this.color = color
     this._led.style.backgroundColor = color
   }
 
   html(){
      return this._led;
   }
 
   style(){
     return this._led.style
   }
 
   sleep(seconds){
      return new Promise(resolve => setTimeout(resolve, 1000*seconds));
   }
 
   async Blink(num, time){
       let state = this.GetState();
       for(let i = 0; i < num; i++){
           this.TurnOff()
           await this.sleep(time)
           this.TurnOn()
           await this.sleep(time)
       }
   }
 }
 
 let led = new LED(20, 20)
 let led2 = new LED(20, 20)

 led.Size(80, 6)
 led.RoundCorner('All', 4)
 led.SetColor("#D690FC")
 led.MoveTo(40, 0)

 led2.Size(6, 80)
 led2.RoundCorner('All', 4)
 led2.SetColor("red")
 led2.MoveTo(80, 40)

 led.Blink(7, 1)
 led2.Blink(14, 0.3)