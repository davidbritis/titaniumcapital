// Lista de ativos (B3, CME, Forex)
const stocks = [
   
    // CME Group - Futuros de Commodities e Índices
    { symbol: "ES=F", price: "4520.75", change: "-0.42%", status: "negative" }, // E-mini S&P 500
    { symbol: "NQ=F", price: "15785.25", change: "+1.12%", status: "positive" }, // E-mini Nasdaq 100
    { symbol: "CL=F", price: "78.60", change: "+0.95%", status: "positive" }, // Petróleo WTI
    { symbol: "GC=F", price: "2015.40", change: "-0.75%", status: "negative" }, // Ouro
    { symbol: "SI=F", price: "24.70", change: "+1.50%", status: "positive" }, // Prata
    { symbol: "ZC=F", price: "520.75", change: "-0.30%", status: "negative" }, // Milho
    { symbol: "ZS=F", price: "1234.50", change: "+0.25%", status: "positive" }, // Soja

    // Forex - Pares de Moedas
    { symbol: "EUR/USD", price: "1.0835", change: "+0.20%", status: "positive" },
    { symbol: "GBP/USD", price: "1.2678", change: "-0.15%", status: "negative" },
    { symbol: "USD/JPY", price: "148.52", change: "+0.40%", status: "positive" },
    { symbol: "USD/CHF", price: "0.8925", change: "-0.10%", status: "negative" },
    { symbol: "AUD/USD", price: "0.6598", change: "+0.30%", status: "positive" },
    { symbol: "USD/CAD", price: "1.3245", change: "-0.25%", status: "negative" },
    { symbol: "NZD/USD", price: "0.6142", change: "+0.35%", status: "positive" },
    { symbol: "USD/BRL", price: "4.92", change: "-0.50%", status: "negative" },

     // B3 - Ações Brasileiras e Futuros
     { symbol: "PETR4.SA", price: "34.20", change: "+1.25%", status: "positive" },
     { symbol: "VALE3.SA", price: "68.75", change: "-0.85%", status: "negative" },
     { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
     { symbol: "BBAS3.SA", price: "42.10", change: "-1.12%", status: "negative" },
     { symbol: "BBDC4.SA", price: "17.85", change: "+0.35%", status: "positive" },

     { symbol: "SI=F", price: "24.70", change: "+1.50%", status: "positive" }, // Prata
    { symbol: "ZC=F", price: "520.75", change: "-0.30%", status: "negative" }, // Milho
    { symbol: "ZS=F", price: "1234.50", change: "+0.25%", status: "positive" }, // Soja
    { symbol: "AUD/USD", price: "0.6598", change: "+0.30%", status: "positive" },
    { symbol: "USD/CAD", price: "1.3245", change: "-0.25%", status: "negative" },
    { symbol: "NZD/USD", price: "0.6142", change: "+0.35%", status: "positive" },
    { symbol: "USD/BRL", price: "4.92", change: "-0.50%", status: "negative" },
    { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
    { symbol: "BBAS3.SA", price: "42.10", change: "-1.12%", status: "negative" },
    { symbol: "BBDC4.SA", price: "17.85", change: "+0.35%", status: "positive" },
    { symbol: "ES=F", price: "4520.75", change: "-0.42%", status: "negative" }, // E-mini S&P 500
    { symbol: "NQ=F", price: "15785.25", change: "+1.12%", status: "positive" }, // E-mini Nasdaq 100
    { symbol: "CL=F", price: "78.60", change: "+0.95%", status: "positive" }, // Petróleo WTI
    { symbol: "EUR/USD", price: "1.0835", change: "+0.20%", status: "positive" },
    { symbol: "GBP/USD", price: "1.2678", change: "-0.15%", status: "negative" },
    { symbol: "USD/JPY", price: "148.52", change: "+0.40%", status: "positive" },
    { symbol: "USD/CHF", price: "0.8925", change: "-0.10%", status: "negative" },
    { symbol: "PETR4.SA", price: "34.20", change: "+1.25%", status: "positive" },
     { symbol: "VALE3.SA", price: "68.75", change: "-0.85%", status: "negative" },
     { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
     { symbol: "SI=F", price: "24.70", change: "+1.50%", status: "positive" }, // Prata
     { symbol: "ZC=F", price: "520.75", change: "-0.30%", status: "negative" }, // Milho
     { symbol: "ZS=F", price: "1234.50", change: "+0.25%", status: "positive" }, // Soja
     { symbol: "AUD/USD", price: "0.6598", change: "+0.30%", status: "positive" },
     { symbol: "USD/CAD", price: "1.3245", change: "-0.25%", status: "negative" },
     { symbol: "NZD/USD", price: "0.6142", change: "+0.35%", status: "positive" },
     { symbol: "USD/BRL", price: "4.92", change: "-0.50%", status: "negative" },
     { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
     { symbol: "BBAS3.SA", price: "42.10", change: "-1.12%", status: "negative" },
     { symbol: "BBDC4.SA", price: "17.85", change: "+0.35%", status: "positive" },
     { symbol: "ES=F", price: "4520.75", change: "-0.42%", status: "negative" }, // E-mini S&P 500
     { symbol: "NQ=F", price: "15785.25", change: "+1.12%", status: "positive" }, // E-mini Nasdaq 100
     { symbol: "CL=F", price: "78.60", change: "+0.95%", status: "positive" }, // Petróleo WTI
     { symbol: "EUR/USD", price: "1.0835", change: "+0.20%", status: "positive" },
     { symbol: "GBP/USD", price: "1.2678", change: "-0.15%", status: "negative" },
     { symbol: "USD/JPY", price: "148.52", change: "+0.40%", status: "positive" },
     { symbol: "USD/CHF", price: "0.8925", change: "-0.10%", status: "negative" },
     { symbol: "PETR4.SA", price: "34.20", change: "+1.25%", status: "positive" },
      { symbol: "VALE3.SA", price: "68.75", change: "-0.85%", status: "negative" },
      { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
      { symbol: "SI=F", price: "24.70", change: "+1.50%", status: "positive" }, // Prata
      { symbol: "ZC=F", price: "520.75", change: "-0.30%", status: "negative" }, // Milho
      { symbol: "ZS=F", price: "1234.50", change: "+0.25%", status: "positive" }, // Soja
      { symbol: "AUD/USD", price: "0.6598", change: "+0.30%", status: "positive" },
      { symbol: "USD/CAD", price: "1.3245", change: "-0.25%", status: "negative" },
      { symbol: "NZD/USD", price: "0.6142", change: "+0.35%", status: "positive" },
      { symbol: "USD/BRL", price: "4.92", change: "-0.50%", status: "negative" },
      { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
      { symbol: "BBAS3.SA", price: "42.10", change: "-1.12%", status: "negative" },
      { symbol: "BBDC4.SA", price: "17.85", change: "+0.35%", status: "positive" },
      { symbol: "ES=F", price: "4520.75", change: "-0.42%", status: "negative" }, // E-mini S&P 500
      { symbol: "NQ=F", price: "15785.25", change: "+1.12%", status: "positive" }, // E-mini Nasdaq 100
      { symbol: "CL=F", price: "78.60", change: "+0.95%", status: "positive" }, // Petróleo WTI
      { symbol: "EUR/USD", price: "1.0835", change: "+0.20%", status: "positive" },
      { symbol: "GBP/USD", price: "1.2678", change: "-0.15%", status: "negative" },
      { symbol: "USD/JPY", price: "148.52", change: "+0.40%", status: "positive" },
      { symbol: "USD/CHF", price: "0.8925", change: "-0.10%", status: "negative" },
      { symbol: "PETR4.SA", price: "34.20", change: "+1.25%", status: "positive" },
       { symbol: "VALE3.SA", price: "68.75", change: "-0.85%", status: "negative" },
       { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
       { symbol: "SI=F", price: "24.70", change: "+1.50%", status: "positive" }, // Prata
       { symbol: "ZC=F", price: "520.75", change: "-0.30%", status: "negative" }, // Milho
       { symbol: "ZS=F", price: "1234.50", change: "+0.25%", status: "positive" }, // Soja
       { symbol: "AUD/USD", price: "0.6598", change: "+0.30%", status: "positive" },
       { symbol: "USD/CAD", price: "1.3245", change: "-0.25%", status: "negative" },
       { symbol: "NZD/USD", price: "0.6142", change: "+0.35%", status: "positive" },
       { symbol: "USD/BRL", price: "4.92", change: "-0.50%", status: "negative" },
       { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
       { symbol: "BBAS3.SA", price: "42.10", change: "-1.12%", status: "negative" },
       { symbol: "BBDC4.SA", price: "17.85", change: "+0.35%", status: "positive" },
       { symbol: "ES=F", price: "4520.75", change: "-0.42%", status: "negative" }, // E-mini S&P 500
       { symbol: "NQ=F", price: "15785.25", change: "+1.12%", status: "positive" }, // E-mini Nasdaq 100
       { symbol: "CL=F", price: "78.60", change: "+0.95%", status: "positive" }, // Petróleo WTI
       { symbol: "EUR/USD", price: "1.0835", change: "+0.20%", status: "positive" },
       { symbol: "GBP/USD", price: "1.2678", change: "-0.15%", status: "negative" },
       { symbol: "USD/JPY", price: "148.52", change: "+0.40%", status: "positive" },
       { symbol: "USD/CHF", price: "0.8925", change: "-0.10%", status: "negative" },
       { symbol: "PETR4.SA", price: "34.20", change: "+1.25%", status: "positive" },
        { symbol: "VALE3.SA", price: "68.75", change: "-0.85%", status: "negative" },
        { symbol: "ITUB4.SA", price: "29.30", change: "+0.50%", status: "positive" },
];

// Função para gerar o HTML do ticker e duplicar para efeito infinito
function generateTicker() {
    const tickerElement = document.getElementById("ticker");

    // Criar HTML das ações e duplicar para não ter espaços vazios
    let tickerHTML = stocks.map(stock => {
        const changeClass = stock.status === "positive" ? "positive" : "negative"; // Definir a classe
        return `<div class="stock">
                    ${stock.symbol} 
                    <span class="price">${stock.price}</span> 
                    <span class="change ${changeClass}">(${stock.change})</span>
                </div>`;
    }).join(" | ");

    // Duplicar conteúdo para rolagem sem pausas
    tickerElement.innerHTML = tickerHTML + " | " + tickerHTML;
}

// Inicializa o ticker
generateTicker();

