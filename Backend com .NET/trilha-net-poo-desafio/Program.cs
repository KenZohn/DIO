using DesafioPOO.Models;

// TODO: Realizar os testes com as classes Nokia e Iphone
Console.WriteLine("\nSmarthphone Nokia:");
Nokia nokia = new Nokia("1234-5678", "NK4S", "2389247937", 128);
nokia.Ligar();
nokia.ReceberLigacao();
nokia.InstalarAplicativo("Duolingo");

Console.WriteLine("\nSmarthphone iPhone:");
Iphone iphone = new Iphone("2222-4444", "Iphone 50 Max", "9209848119", 64);
iphone.Ligar();
iphone.ReceberLigacao();
iphone.InstalarAplicativo("Tiktok");