const BASE = `https://graph.facebook.com/v20.0/${process.env.WHATSAPP_PHONE_NUMBER_ID}`;
const TOKEN = process.env.WHATSAPP_TOKEN!;

async function post(body: object) {
  const res = await fetch(`${BASE}/messages`, {
    method: "POST",
    headers: { Authorization: `Bearer ${TOKEN}`, "Content-Type": "application/json" },
    body: JSON.stringify({ messaging_product: "whatsapp", ...body }),
  });
  return res.json();
}

export async function sendText(to: string, text: string) {
  return post({ to, type: "text", text: { body: text } });
}

export async function sendDealCreated(to: string, opts: {
  dealNumber: string; item: string; amount: string; role: "buyer" | "seller";
}) {
  const msg =
    opts.role === "seller"
      ? `🛡️ *Deal Shield* — New Deal!\n\nDeal #${opts.dealNumber} created.\n📦 Item: ${opts.item}\n💰 Amount: ₦${opts.amount} is now in escrow.\n\nYou can ship the item safely. The buyer's payment is secured.`
      : `🛡️ *Deal Shield* — Deal Confirmed!\n\nDeal #${opts.dealNumber}\n📦 Item: ${opts.item}\n💰 ₦${opts.amount} locked in escrow.\n\nWe'll notify you when the seller ships.`;
  return sendText(to, msg);
}

export async function sendFundsReleased(to: string, opts: {
  dealNumber: string; amount: string;
}) {
  return sendText(
    to,
    `🎉 *Deal Shield* — Funds Released!\n\nDeal #${opts.dealNumber} is complete.\n₦${opts.amount} has been sent to your account.\n\nThank you for trading safely with Deal Shield.`
  );
}

export async function sendDisputeRaised(to: string, opts: {
  dealNumber: string;
}) {
  return sendText(
    to,
    `⚠️ *Deal Shield* — Dispute Raised\n\nA dispute has been opened on Deal #${opts.dealNumber}.\n\nOur team will review evidence from both parties and resolve within 24 hours. Funds remain locked until a decision is made.`
  );
}

export async function sendDeliveryConfirmation(to: string, opts: {
  dealNumber: string; item: string;
}) {
  return sendText(
    to,
    `📬 *Deal Shield* — Item Delivered?\n\nDeal #${opts.dealNumber}: *${opts.item}*\n\nHas the item been delivered as described?\n\nReply *YES* to release funds to the seller.\nReply *NO* to raise a dispute.`
  );
}
