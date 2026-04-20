const DATA_URL = "events.json";

async function loadDatabase() {
  const response = await fetch(DATA_URL);
  if (!response.ok) {
    throw new Error("Khong the tai du lieu su kien");
  }

  return response.json();
}

function normalizeId(value) {
  return String(value);
}

function getEventById(database, eventId) {
  return database.events.find((event) => normalizeId(event.id) === normalizeId(eventId)) || null;
}

function getSchedulesByEventId(database, eventId) {
  return database.schedules
    .filter((schedule) => normalizeId(schedule.eventId) === normalizeId(eventId))
    .sort((a, b) => a.date.localeCompare(b.date));
}

function getScheduleById(database, scheduleId) {
  return database.schedules.find((schedule) => normalizeId(schedule.id) === normalizeId(scheduleId)) || null;
}

function getSeatMapById(database, seatMapId) {
  return database.seatMaps.find((seatMap) => normalizeId(seatMap.id) === normalizeId(seatMapId)) || null;
}

function formatCurrency(value) {
  if (value === 0) {
    return "Miễn phí";
  }

  return `${Number(value).toLocaleString("vi-VN")}đ`;
}

function formatDate(dateText) {
  const [year, month, day] = dateText.split("-");
  return `${day}/${month}/${year}`;
}

function getLowestPrice(schedule) {
  const prices = Object.values(schedule.zonePrices || {});
  if (!prices.length) {
    return 0;
  }

  return Math.min(...prices);
}

function buildSeatId(zoneId, rowIndex, colIndex) {
  return `${zoneId}-${rowIndex + 1}-${colIndex + 1}`;
}

window.EventStore = {
  buildSeatId,
  formatCurrency,
  formatDate,
  getEventById,
  getLowestPrice,
  getScheduleById,
  getSchedulesByEventId,
  getSeatMapById,
  loadDatabase
};
