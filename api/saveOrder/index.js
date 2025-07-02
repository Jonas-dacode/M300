const { CosmosClient } = require("@azure/cosmos");

module.exports = async function (context, req) {
  const data = req.body;

  if (!data || !data.name || !data.address || !data.email || !data.card) {
    context.res = {
      status: 400,
      body: "Ungültige oder unvollständige Daten"
    };
    return;
  }

  const client = new CosmosClient(process.env.COSMOS_DB_CONNECTION_STRING);
  const database = client.database("BestellungenDB");
  const container = database.container("Bestellungen");

  const item = {
    id: Date.now().toString(),
    name: data.name,
    address: data.address,
    email: data.email,
    card: data.card // ⚠️ Hinweis: in der Praxis NIEMALS echte Kartendaten so speichern!
  };

  await container.items.create(item);

  context.res = {
    status: 200,
    body: "Bestellung gespeichert"
  };
};
