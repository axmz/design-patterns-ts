import { StockExchange as SockExchange } from "./mediator";
import { GormanSlacks, JTPoorman } from "./brokers";

console.group("STOCK EXCHANGE & REGISTRATION");
const mediator = new SockExchange(); // Stock exchange
const gs = new GormanSlacks(mediator);
const jtp = new JTPoorman(mediator);
console.groupEnd();

console.groupCollapsed("BROKER CODES");
console.log("GS broker code", gs.code);
console.log("JTP broker code", jtp.code);
console.groupEnd();

console.group("TRANSACTIONS");
gs.ask("GOOG", 100);
gs.ask("AAPL", 300);
jtp.bid("GOOG", 100);

jtp.ask("TSLA", 300);
gs.bid("TSLA", 400);
jtp.ask("TSLA", 400); // 700 offered in total at this point, but then 400 are sold gs
console.groupEnd();

console.group("STOCK EXCHANGE BOARD");
mediator.getStockOffers();
