const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const data = req.body;
  if (!data) {
    context.res = { status: 400, body: "No data provided" };
    return;
  }

  // Azure Cosmos DB Client initialisieren
  const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
  const database = client.database("BestellungenDB");        // Name der Datenbank
  const container = database.container("Bestellungen");      // Name des Containers/der Collection

  // Item in die Datenbank schreiben (inkl. auto-generierter ID falls nicht vorhanden)
  const item = { ...data }; 
  if (!item.id) item.id = Date.now().toString();  // eine einfache ID vergeben, falls nicht im Formular
  await container.items.create(item);

  context.res = {
    status: 200,
    body: "OK"  // einfache Bestätigung (ggf. könnte man hier JSON zurückgeben)
  };
};
