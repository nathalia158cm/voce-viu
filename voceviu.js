//TEXTO
let fonte;
let texto;


//SOM

//IMAGENS
let entrada;

//BANHEIRO
let banheiro_fundo;
let imgbanheiro = [];

//ESCULTURA
let escultura_fundo;
let imgescultura = [];

//GRAVURA
let gravura_fundo;
let gravura_gravura;
let imggravura = [];

//PINTURA
let pintura_fundo;
let imgpintura = [];

//SOFA
let sofacel;
let sofaon;
let sofaoff;
let imgsofa = [];


//bool (VERDADEIRO/FALSO)
var dialogo = false;

var menu = true;
var escultura = false;
var banheiro = false; 
var gravura = false;
var pintura = false;
var sofa = false; 

var contador_banheiro = 0;
var contador_escultura = 0;
var contador_gravura = 0;
var contador_pintura = 0;
var contador_sofa = 0;

function setup() 
{  
  frameRate(120);
  //TAMANHO DA TELA
  createCanvas(960,540);  
  //createCanvas(windowWidth,windowHeight);
  
  //TEXTO
    fonte = loadFont("data/texto/ROTORcapNeue-Regular.ttf");
    texto = loadStrings("data/texto/dialogos.txt");
    //ENTRADA
    entrada = loadImage ("data/imagens/menu/Entrada.gif");  
  
    //BANHEIRO
    banheiro_fundo = loadImage("data/imagens/banheiro/banheiro_fundo.gif");
    
    for (var b = 1; b <= 5; b++)
    {
    imgbanheiro[b]= loadImage ("data/imagens/banheiro/banheiro_"+b+".png");
    } 
  
    //ESCULTURA
    escultura_fundo = loadImage("data/imagens/escultura/escultura_fundo.gif");
    
    for (var e = 1; e <= 5; e++)
    {
      imgescultura[e]= loadImage ("data/imagens/escultura/escultura_"+e+".png");
    }
  
    //GRAVURA
    gravura_fundo = loadImage ("data/imagens/gravura/gravura_fundo.gif");
    
    for(var g = 1; g <= 5; g++)
    {
    imggravura[g] = loadImage ("data/imagens/gravura/gravura_"+g+".png");
    }
    
    //PINTURA
    pintura_fundo = loadImage ("data/imagens/pintura/pintura_fundo.gif");
    
    
    for(var p = 1; p <= 5; p++)
    {
    imgpintura[p] = loadImage ("data/imagens/pintura/pintura_"+p+".png");
    }
    
    //SOFÁ
   sofacel = loadImage ("data/imagens/sofa/sofacel.gif");
   sofaon = loadImage ("data/imagens/sofa/sofaon.gif");
   sofaoff = loadImage ("data/imagens/sofa/sofaoff.gif");
    
    for (var s = 1; s <= 10; s++)
    {
    imgsofa[s]= loadImage ("data/imagens/sofa/sofa_"+s+".png");
    } 
  
  
  textFont(fonte);
  textSize(18);
  fill(255);
  
}


function draw() 
{
  if (menu)
  {
    drawmenu(); 
    mouse();
  }
  if (banheiro)
  {
    drawbanheiro();
    mouse();
  }
  if (escultura)
  {
    drawescultura();
    mouse();
  }
  if (gravura)
  {
    drawgravura();
    mouse();
  }
  if (pintura)
  {
    drawpintura();
    mouse();
  }
  if (sofa)
  {
    drawsofa();
    mouse();
  }
  
}

function mouseClicked() //MOVIMENTAÇÃO  POR CLICK 
{  
  //MENU
  if (menu)
  {
    menu = false;
    sofa = true;
    contador_sofa ++;
    dialogo = true;
  }
  
  if ((dialogo) && (mouseX > 7*width/8) && (mouseX < 10*width/11) && (mouseY > 7*height/8) && (mouseY < 10*height/11))
  {
    dialogo = false;
    draw();
  }
  
  if(!dialogo)
  {
    //CLICK BANHEIRO
  if (banheiro) 
  {
    //BANHEIRO > SOFÁ
    if((mouseX > 2*width/3) && (mouseX < 3*width/4) && (mouseY > 3*height/4))
    {
      banheiro = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK ESCULTURA
  if (escultura)
  {
    //ESCULTURA > SOFÁ
    if((mouseX < width/4) && (mouseY > 3*height/4))
    {
      escultura = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK GRAVURA
  if(gravura)
  {
    //GRAVURA > SOFÁ
    if ((mouseX > 2*width/3) && (mouseX < 7*width/8) && (mouseY > height/6) && (mouseY < 3*height/4))
    {
      gravura = false;
      sofa = true;
      contador_sofa ++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK PINTURA
  if (pintura)
  {
    // PINTURA > SOFÁ
    if ((mouseY > 7*height/8) && (mouseX < 7*width/8))
    {
      pintura = false;
      sofa = true;
      contador_sofa++;
      dialogo = true;
      draw();
    }
  }
  
  //CLICK SOFA
  if (sofa)
  {
    //SOFÁ > BANHEIRO
    if((mouseX < width/6) && (mouseY < height / 4))
    {
      sofa = false;
      banheiro = true;
      contador_banheiro++;
      dialogo = true;
      draw();
    }
    //SOFÁ > ESCULTURA
    if ((mouseX > 3*width/4) && (mouseY > height/2) && (mouseY < 7*height/8))
    {
      sofa = false;
      escultura = true;
      contador_escultura++;
      dialogo = true;
      draw();
    }
    
    //SOFÁ > GRAVURA
    if ((mouseX > width/4) && (mouseX < width/3) && (mouseY > height/4) && (mouseY < 3*height/4))
    {
      sofa = false;
      gravura = true;
      contador_gravura++;
      dialogo = true;
      draw();
    }
    // SOFÁ > PINTURA
    if ((mouseX > width/2) && (mouseY < width/8))
    {
      sofa = false;
      pintura = true;
      contador_pintura++;
      dialogo = true;
      draw();
    }
  }
  
  }
  
}

//DESENHAR MENU
function drawmenu ()
{
  background (entrada);
}


//DESENHAR BANHEIRO
function drawbanheiro()
{ 
 
 background(banheiro_fundo);
  
  for (var i = 1; i <= 5; i++)
  {
  if ( i <=6 - contador_banheiro)
  {
  image(imgbanheiro[i],0,0);
  }
  }
  
  if (contador_banheiro==2)
  {
  caixatexto();
  text(texto[contador_banheiro - 1], width/15, height - 120 ,9*width/10,height/5 );
  }
  
  if(contador_banheiro != 2)
  {
    dialogo = false;
  }
  
  
}


//DESENHAR ESCULTURA
function drawescultura()
{
  
  background(escultura_fundo);
  
  for (var i = 1; i <= 5; i++)
  {
  if ( i <=6 - contador_escultura)
  {
  image(imgescultura[i],0,0);
  } 
  }
  if (contador_escultura > 5)
  {
    dialogo = false;
  }
  if(dialogo)
  {
  caixatexto();
  text(texto[contador_escultura + 2], width/15, height - 120 ,9*width/10,height/5 );
  }
}


//DESENHAR GRAVURA
function drawgravura()
{
 
  background(gravura_fundo);

  
  for (var i = 1; i <= 5; i++)
  { 
    if (i <= 6 - contador_gravura)
    {
      image(imggravura[i],0,0);
    }    
  }
  if (contador_gravura > 5)
  {
    dialogo = false;
  }
  
  if (dialogo)
  {
  caixatexto();
  text(texto[contador_gravura + 10], width/15, height - 120 ,9*width/10,height/5 );
  }
}


//DESENHAR PINTURA
function drawpintura ()
{
  
  background(pintura_fundo);
  
  for (var i = 1; i <= 5; i++)
  {  
    if (i <= 6 - contador_pintura)
    {
      image(imgpintura[i],0,0);
    }    
  }
  if (contador_pintura > 5)
  {
    dialogo = false;
  }
  
  if (dialogo)
  {
  caixatexto();
  text(texto[contador_pintura+16], width/15, height - 120 ,9*width/10,height/5 );
  }
  
}


//DESENHAR SOFÁ
function drawsofa()
{
  
  //DESENHAR FUNDO
  
  if (contador_sofa == 1)
  {
    background(sofaon);
  }
  if ((contador_sofa > 1) && (contador_sofa < 22 ))
  {
    background(sofaoff);
  }
  if (contador_sofa >= 22)
  {
    background(sofacel);
    dialogo = false;
  }
    
  for (var i = 1; i <= 10; i++)
  {
    if ( i - 1 <= 12 - contador_sofa)
    {
      image(imgsofa[i],0,0);
    }
  }
  
  if(dialogo)
  {
   caixatexto();
   text(texto[contador_sofa+22], width/15, height - 120 ,9*width/10,height/5 );
  }
   
}

function caixatexto ()
{
  colorMode(RGB, 255, 255, 255, 1);
  fill(0, 0, 0, 0.5);
  stroke(255);
  rect(width/30,3*height/4,10*width/11,height/5);
  fill(255);
  triangle(7*width/8, 7*height/8, 7*width/8 , (7*height/8) +20  , (7*width/8) + 30,(7*height/8) +10);
}

function mouse ()
{
  //MENU
  if (menu)
  {
    cursor(HAND);
  }

  if (dialogo)
  {
  if ((mouseX > 7*width/8) && (mouseX < 10*width/11) && (mouseY > 7*height/8) && (mouseY < 10*height/11))
  {
    cursor(HAND);
  }
  else
  {
    cursor(ARROW);
  }
  }
  
  
  if(!dialogo)
  {
    //CLICK BANHEIRO
  if (banheiro) 
  {
    //BANHEIRO > SOFÁ
    if((mouseX > 2*width/3) && (mouseX < 3*width/4) && (mouseY > 3*height/4))
    {
      cursor(HAND);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK ESCULTURA
  if (escultura)
  {
    //ESCULTURA > SOFÁ
    if((mouseX < width/4) && (mouseY > 3*height/4))
    {
      cursor(HAND);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK GRAVURA
  if(gravura)
  {
    //GRAVURA > SOFÁ
    if ((mouseX > 2*width/3) && (mouseX < 7*width/8) && (mouseY > height/6) && (mouseY < 3*height/4))
    {
      cursor(HAND);
    }
  }
  
  //CLICK PINTURA
  if (pintura)
  {
    // PINTURA > SOFÁ
    if ((mouseY > 7*height/8) && (mouseX < 7*width/8))
    {
      cursor(HAND);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  //CLICK SOFA
  if (sofa)
  {
    //SOFÁ > BANHEIRO
    if((mouseX < width/6) && (mouseY < height / 4))
    {
      cursor(HAND);
    }
    //SOFÁ > ESCULTURA
    else if ((mouseX > 3*width/4) && (mouseY > height/2) && (mouseY < 7*height/8))
    {
      cursor(HAND);
    }
    
    //SOFÁ > GRAVURA
    else if ((mouseX > width/4) && (mouseX < width/3) && (mouseY > height/4) && (mouseY < 3*height/4))
    {
      cursor(HAND);
    }
    // SOFÁ > PINTURA
    else if ((mouseX > width/2) && (mouseY < width/8))
    {
      cursor(HAND);
    }
    else
  {
    cursor(ARROW);
  }
  }
  
  }
}
