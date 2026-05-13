const data = {
  kpis: { transactions: 1000, totalSales: 322966.75, avgTransaction: 322.97, grossIncome: 15379.37, avgRating: 6.97 },
  monthlySales: [
    { label: "January", value: 116291.87 },
    { label: "February", value: 97219.37 },
    { label: "March", value: 109455.51 }
  ],
  daySales: [
    { label: "Monday", value: 37899.08 },
    { label: "Tuesday", value: 51482.25 },
    { label: "Wednesday", value: 43731.13 },
    { label: "Thursday", value: 45349.25 },
    { label: "Friday", value: 43926.34 },
    { label: "Saturday", value: 56120.81 },
    { label: "Sunday", value: 44457.89 }
  ],
  genderTotal: [{ label: "Female", value: 167882.92 }, { label: "Male", value: 155083.82 }],
  genderAverage: [{ label: "Female", value: 335.10 }, { label: "Male", value: 310.79 }],
  productRevenue: [
    { label: "Food and beverages", value: 56144.84 },
    { label: "Sports and travel", value: 55122.83 },
    { label: "Electronic accessories", value: 54337.53 },
    { label: "Fashion accessories", value: 54305.89 },
    { label: "Home and lifestyle", value: 53861.91 },
    { label: "Health and beauty", value: 49193.74 }
  ],
  productQuantity: [
    { label: "Electronic accessories", value: 971 },
    { label: "Food and beverages", value: 952 },
    { label: "Sports and travel", value: 920 },
    { label: "Home and lifestyle", value: 911 },
    { label: "Fashion accessories", value: 902 },
    { label: "Health and beauty", value: 854 }
  ],
  branchSales: [{ label: "Branch C", value: 110568.71 }, { label: "Branch A", value: 106200.37 }, { label: "Branch B", value: 106197.67 }],
  paymentRevenue: [{ label: "Cash", value: 112206.57 }, { label: "Ewallet", value: 109993.11 }, { label: "Credit card", value: 100767.07 }],
  paymentCount: [{ label: "Ewallet", value: 345 }, { label: "Cash", value: 344 }, { label: "Credit card", value: 311 }],
  customerTypeSales: [{ label: "Member", value: 164223.44 }, { label: "Normal", value: 158743.30 }],
  hourlySales: [
    { label: "10", value: 31421.48 }, { label: "11", value: 30377.33 }, { label: "12", value: 26065.88 },
    { label: "13", value: 34723.23 }, { label: "14", value: 30828.40 }, { label: "15", value: 31179.51 },
    { label: "16", value: 25226.32 }, { label: "17", value: 24445.22 }, { label: "18", value: 26030.34 },
    { label: "19", value: 39699.51 }, { label: "20", value: 22969.53 }
  ],
  branchMonth: [
    { branch: "A", month: "January", value: 38681.13 }, { branch: "A", month: "February", value: 29860.12 }, { branch: "A", month: "March", value: 37659.12 },
    { branch: "B", month: "January", value: 37176.06 }, { branch: "B", month: "February", value: 34424.27 }, { branch: "B", month: "March", value: 34597.34 },
    { branch: "C", month: "January", value: 40434.68 }, { branch: "C", month: "February", value: 32934.98 }, { branch: "C", month: "March", value: 37199.04 }
  ],
  branchProduct: [
    { branch: "C", product: "Food and beverages", value: 23766.85 }, { branch: "A", product: "Home and lifestyle", value: 22417.20 },
    { branch: "C", product: "Fashion accessories", value: 21560.07 }, { branch: "B", product: "Sports and travel", value: 19988.20 },
    { branch: "B", product: "Health and beauty", value: 19980.66 }, { branch: "A", product: "Sports and travel", value: 19372.70 },
    { branch: "C", product: "Electronic accessories", value: 18968.97 }, { branch: "A", product: "Electronic accessories", value: 18317.11 },
    { branch: "B", product: "Home and lifestyle", value: 17549.16 }, { branch: "A", product: "Food and beverages", value: 17163.10 },
    { branch: "B", product: "Electronic accessories", value: 17051.44 }, { branch: "C", product: "Health and beauty", value: 16615.33 },
    { branch: "B", product: "Fashion accessories", value: 16413.32 }, { branch: "A", product: "Fashion accessories", value: 16332.51 },
    { branch: "C", product: "Sports and travel", value: 15761.93 }, { branch: "B", product: "Food and beverages", value: 15214.89 },
    { branch: "C", product: "Home and lifestyle", value: 13895.55 }, { branch: "A", product: "Health and beauty", value: 12597.75 }
  ],
  productRating: [
    { label: "Food and beverages", value: 7.11 }, { label: "Fashion accessories", value: 7.03 },
    { label: "Health and beauty", value: 7.00 }, { label: "Electronic accessories", value: 6.92 },
    { label: "Sports and travel", value: 6.92 }, { label: "Home and lifestyle", value: 6.84 }
  ],
  corrLabels: ["Unit price", "Quantity", "Total", "Rating"],
  corrMatrix: [[1.00, 0.01, 0.63, -0.01], [0.01, 1.00, 0.71, -0.02], [0.63, 0.71, 1.00, -0.04], [-0.01, -0.02, -0.04, 1.00]],
  scatter: [
    { rating: 9.1, total: 548.97, gender: "Female" }, { rating: 4.8, total: 451.71, gender: "Male" },
    { rating: 7.9, total: 91.06, gender: "Female" }, { rating: 10.0, total: 77.93, gender: "Female" },
    { rating: 5.5, total: 624.90, gender: "Female" }, { rating: 4.1, total: 51.15, gender: "Male" },
    { rating: 5.4, total: 942.90, gender: "Female" }, { rating: 8.8, total: 319.79, gender: "Male" },
    { rating: 6.8, total: 120.64, gender: "Female" }, { rating: 6.1, total: 285.70, gender: "Male" },
    { rating: 6.2, total: 709.32, gender: "Female" }, { rating: 6.4, total: 587.66, gender: "Female" },
    { rating: 5.5, total: 216.69, gender: "Female" }, { rating: 9.1, total: 149.36, gender: "Female" },
    { rating: 7.4, total: 680.06, gender: "Male" }, { rating: 7.0, total: 507.68, gender: "Female" },
    { rating: 4.3, total: 406.88, gender: "Female" }, { rating: 7.5, total: 121.59, gender: "Female" },
    { rating: 9.5, total: 20.11, gender: "Female" }, { rating: 7.1, total: 572.77, gender: "Female" },
    { rating: 5.5, total: 637.73, gender: "Male" }, { rating: 6.2, total: 666.94, gender: "Female" },
    { rating: 9.1, total: 96.64, gender: "Male" }, { rating: 7.3, total: 203.93, gender: "Male" },
    { rating: 6.4, total: 311.19, gender: "Female" }, { rating: 9.3, total: 135.36, gender: "Female" },
    { rating: 6.7, total: 663.30, gender: "Female" }, { rating: 9.1, total: 507.91, gender: "Male" },
    { rating: 8.6, total: 40.34, gender: "Female" }, { rating: 4.7, total: 801.86, gender: "Female" },
    { rating: 4.3, total: 57.08, gender: "Male" }, { rating: 5.0, total: 446.96, gender: "Female" },
    { rating: 5.9, total: 295.41, gender: "Male" }, { rating: 7.3, total: 106.50, gender: "Male" },
    { rating: 5.0, total: 335.01, gender: "Male" }, { rating: 7.3, total: 690.02, gender: "Female" }
  ]
};

const palette = ["#0f7b7b", "#e66f51", "#3d6fb6", "#e7b04b", "#3d8b61", "#8b5fbf", "#53656a"];
const tooltip = document.getElementById("tooltip");
const chartHitAreas = new Map();

function money(value) {
  return new Intl.NumberFormat("en-US", { maximumFractionDigits: 2 }).format(value);
}

function setKpis() {
  document.getElementById("kpiSales").textContent = money(data.kpis.totalSales);
  document.getElementById("kpiTransactions").textContent = money(data.kpis.transactions);
  document.getElementById("kpiAverage").textContent = money(data.kpis.avgTransaction);
  document.getElementById("kpiGross").textContent = money(data.kpis.grossIncome);
  document.getElementById("kpiRating").textContent = `${data.kpis.avgRating} / 10`;
}

function setupCanvas(canvas) {
  const ratio = window.devicePixelRatio || 1;
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width * ratio;
  canvas.height = Number(canvas.getAttribute("height")) * ratio;
  const ctx = canvas.getContext("2d");
  ctx.scale(ratio, ratio);
  return { ctx, w: rect.width, h: Number(canvas.getAttribute("height")) };
}

function clear(ctx, w, h) {
  ctx.clearRect(0, 0, w, h);
}

function axis(ctx, pad, w, h) {
  ctx.strokeStyle = "#d8e5e4";
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(pad.l, pad.t);
  ctx.lineTo(pad.l, h - pad.b);
  ctx.lineTo(w - pad.r, h - pad.b);
  ctx.stroke();
}

function label(ctx, text, x, y, align = "center", size = 11, color = "#607174") {
  ctx.fillStyle = color;
  ctx.font = `${size}px Segoe UI, Arial`;
  ctx.textAlign = align;
  ctx.fillText(text, x, y);
}

function drawBars(id, rows, options = {}) {
  const canvas = document.getElementById(id);
  const { ctx, w, h } = setupCanvas(canvas);
  clear(ctx, w, h);
  const horizontal = options.horizontal;
  const pad = horizontal ? { l: 150, r: 24, t: 18, b: 32 } : { l: 52, r: 18, t: 18, b: 54 };
  const max = Math.max(...rows.map(d => d.value)) * 1.12;
  const hits = [];
  axis(ctx, pad, w, h);

  if (horizontal) {
    const gap = 8;
    const barH = Math.max(12, ((h - pad.t - pad.b) / rows.length) - gap);
    rows.forEach((d, i) => {
      const y = pad.t + i * (barH + gap) + 4;
      const bw = (d.value / max) * (w - pad.l - pad.r);
      ctx.fillStyle = palette[i % palette.length];
      roundRect(ctx, pad.l, y, bw, barH, 5);
      ctx.fill();
      label(ctx, d.label, pad.l - 8, y + barH * 0.65, "right", 10, "#142326");
      label(ctx, money(d.value), pad.l + bw + 6, y + barH * 0.65, "left", 10, "#607174");
      hits.push({ x: pad.l, y, w: bw, h: barH, text: `${d.label}: ${money(d.value)}` });
    });
  } else {
    const slot = (w - pad.l - pad.r) / rows.length;
    rows.forEach((d, i) => {
      const bw = Math.max(20, slot * 0.58);
      const x = pad.l + i * slot + (slot - bw) / 2;
      const bh = (d.value / max) * (h - pad.t - pad.b);
      const y = h - pad.b - bh;
      ctx.fillStyle = palette[i % palette.length];
      roundRect(ctx, x, y, bw, bh, 6);
      ctx.fill();
      label(ctx, shortLabel(d.label), x + bw / 2, h - pad.b + 18, "center", 10);
      label(ctx, money(d.value), x + bw / 2, y - 6, "center", 10, "#142326");
      hits.push({ x, y, w: bw, h: bh, text: `${d.label}: ${money(d.value)}` });
    });
  }
  chartHitAreas.set(canvas, hits);
}

function drawLine(id, rows, options = {}) {
  const canvas = document.getElementById(id);
  const { ctx, w, h } = setupCanvas(canvas);
  clear(ctx, w, h);
  const pad = { l: 54, r: 24, t: 20, b: 48 };
  const max = Math.max(...rows.flatMap(series => series.values ? series.values.map(v => v.value) : [series.value])) * 1.12;
  const series = rows[0]?.values ? rows : [{ name: options.name || "", values: rows, color: palette[0] }];
  const labels = series[0].values.map(d => d.label);
  const step = (w - pad.l - pad.r) / Math.max(1, labels.length - 1);
  axis(ctx, pad, w, h);
  label(ctx, money(max), pad.l - 8, pad.t + 4, "right", 10);
  label(ctx, "0", pad.l - 8, h - pad.b, "right", 10);
  labels.forEach((text, i) => label(ctx, shortLabel(text), pad.l + i * step, h - pad.b + 18, "center", 10));
  const hits = [];

  series.forEach((serie, si) => {
    ctx.strokeStyle = serie.color || palette[si % palette.length];
    ctx.lineWidth = 3;
    ctx.beginPath();
    serie.values.forEach((d, i) => {
      const x = pad.l + i * step;
      const y = h - pad.b - (d.value / max) * (h - pad.t - pad.b);
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    });
    ctx.stroke();
    serie.values.forEach((d, i) => {
      const x = pad.l + i * step;
      const y = h - pad.b - (d.value / max) * (h - pad.t - pad.b);
      ctx.fillStyle = "#fff";
      ctx.beginPath();
      ctx.arc(x, y, 5, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = serie.color || palette[si % palette.length];
      ctx.lineWidth = 3;
      ctx.stroke();
      hits.push({ x: x - 8, y: y - 8, w: 16, h: 16, text: `${serie.name ? serie.name + " - " : ""}${d.label}: ${money(d.value)}` });
    });
  });

  if (series.length > 1) {
    series.forEach((s, i) => {
      ctx.fillStyle = s.color || palette[i];
      ctx.fillRect(w - pad.r - 120, pad.t + i * 18, 10, 10);
      label(ctx, `Branch ${s.name}`, w - pad.r - 104, pad.t + 9 + i * 18, "left", 11, "#142326");
    });
  }
  chartHitAreas.set(canvas, hits);
}

function drawScatter(id) {
  const canvas = document.getElementById(id);
  const { ctx, w, h } = setupCanvas(canvas);
  clear(ctx, w, h);
  const pad = { l: 56, r: 24, t: 22, b: 46 };
  const minX = 4, maxX = 10, minY = 0, maxY = 1050;
  axis(ctx, pad, w, h);
  label(ctx, "Rating", w / 2, h - 10, "center", 11);
  label(ctx, "Total sales", 8, 20, "left", 11);
  const hits = [];
  data.scatter.forEach(d => {
    const x = pad.l + ((d.rating - minX) / (maxX - minX)) * (w - pad.l - pad.r);
    const y = h - pad.b - ((d.total - minY) / (maxY - minY)) * (h - pad.t - pad.b);
    ctx.fillStyle = d.gender === "Female" ? "rgba(230,111,81,0.72)" : "rgba(15,123,123,0.72)";
    ctx.beginPath();
    ctx.arc(x, y, 4.5, 0, Math.PI * 2);
    ctx.fill();
    hits.push({ x: x - 7, y: y - 7, w: 14, h: 14, text: `${d.gender}: rating ${d.rating}, total ${money(d.total)}` });
  });
  ctx.strokeStyle = "#3d6fb6";
  ctx.setLineDash([6, 6]);
  ctx.beginPath();
  ctx.moveTo(pad.l, h - pad.b - 335 / maxY * (h - pad.t - pad.b));
  ctx.lineTo(w - pad.r, h - pad.b - 315 / maxY * (h - pad.t - pad.b));
  ctx.stroke();
  ctx.setLineDash([]);
  chartHitAreas.set(canvas, hits);
}

function drawHeatmap(id) {
  const canvas = document.getElementById(id);
  const { ctx, w, h } = setupCanvas(canvas);
  clear(ctx, w, h);
  const labels = data.corrLabels;
  const size = Math.min((w - 116) / labels.length, (h - 92) / labels.length);
  const startX = 92;
  const startY = 28;
  const hits = [];
  labels.forEach((name, i) => {
    label(ctx, name, startX + i * size + size / 2, startY - 8, "center", 10, "#142326");
    label(ctx, name, startX - 8, startY + i * size + size / 2 + 4, "right", 10, "#142326");
  });
  data.corrMatrix.forEach((row, r) => {
    row.forEach((value, c) => {
      ctx.fillStyle = heatColor(value);
      ctx.fillRect(startX + c * size, startY + r * size, size - 2, size - 2);
      label(ctx, value.toFixed(2), startX + c * size + size / 2, startY + r * size + size / 2 + 4, "center", 12, Math.abs(value) > 0.55 ? "#fff" : "#142326");
      hits.push({ x: startX + c * size, y: startY + r * size, w: size, h: size, text: `${labels[r]} vs ${labels[c]}: ${value.toFixed(2)}` });
    });
  });
  chartHitAreas.set(canvas, hits);
}

function heatColor(value) {
  const intensity = Math.min(1, Math.abs(value));
  if (value >= 0) return `rgba(15, 123, 123, ${0.18 + intensity * 0.72})`;
  return `rgba(230, 111, 81, ${0.18 + intensity * 0.72})`;
}

function branchSeries() {
  const months = ["January", "February", "March"];
  return ["A", "B", "C"].map((branch, i) => ({
    name: branch,
    color: palette[i],
    values: months.map(month => ({
      label: month,
      value: data.branchMonth.find(d => d.branch === branch && d.month === month).value
    }))
  }));
}

function shortLabel(text) {
  const map = {
    "Electronic accessories": "Electronics",
    "Fashion accessories": "Fashion",
    "Food and beverages": "Food",
    "Health and beauty": "Health",
    "Home and lifestyle": "Home",
    "Sports and travel": "Sports",
    "Credit card": "Card"
  };
  return map[text] || text;
}

function roundRect(ctx, x, y, w, h, r) {
  const radius = Math.min(r, w / 2, h / 2);
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + w, y, x + w, y + h, radius);
  ctx.arcTo(x + w, y + h, x, y + h, radius);
  ctx.arcTo(x, y + h, x, y, radius);
  ctx.arcTo(x, y, x + w, y, radius);
  ctx.closePath();
}

function bindTooltip() {
  document.querySelectorAll("canvas").forEach(canvas => {
    canvas.addEventListener("mousemove", event => {
      const rect = canvas.getBoundingClientRect();
      const x = event.clientX - rect.left;
      const y = event.clientY - rect.top;
      const hit = (chartHitAreas.get(canvas) || []).find(item => x >= item.x && x <= item.x + item.w && y >= item.y && y <= item.y + item.h);
      if (!hit) {
        tooltip.style.display = "none";
        return;
      }
      tooltip.textContent = hit.text;
      tooltip.style.left = `${event.clientX}px`;
      tooltip.style.top = `${event.clientY}px`;
      tooltip.style.display = "block";
    });
    canvas.addEventListener("mouseleave", () => tooltip.style.display = "none");
  });
}

function renderBranchProducts() {
  const filter = document.getElementById("branchFilter").value;
  const rows = data.branchProduct
    .filter(d => filter === "All" || d.branch === filter)
    .map(d => ({ label: `B${d.branch} - ${shortLabel(d.product)}`, value: d.value }));
  drawBars("branchProductChart", rows, { horizontal: true });
}

function renderAll() {
  drawLine("monthlyChart", data.monthlySales, { name: "Monthly Sales" });
  drawBars("dayChart", data.daySales);
  drawLine("hourChart", data.hourlySales, { name: "Hourly Sales" });
  drawBars("genderChart", data.genderTotal);
  drawBars("paymentChart", data.paymentRevenue);
  drawBars("customerChart", data.customerTypeSales);
  drawBars("productChart", data.productRevenue, { horizontal: true });
  drawBars("productRatingChart", data.productRating, { horizontal: true });
  drawBars("branchChart", data.branchSales);
  drawLine("branchMonthChart", branchSeries());
  renderBranchProducts();
  drawScatter("scatterChart");
  drawHeatmap("heatmapChart");
}

function setButtonGroup(selector, callback) {
  document.querySelectorAll(selector).forEach(button => {
    button.addEventListener("click", () => {
      button.parentElement.querySelectorAll("button").forEach(item => item.classList.remove("active"));
      button.classList.add("active");
      callback(button);
    });
  });
}

setKpis();
renderAll();
bindTooltip();

setButtonGroup("[data-gender-mode]", button => {
  drawBars("genderChart", button.dataset.genderMode === "average" ? data.genderAverage : data.genderTotal);
});

setButtonGroup("[data-payment-mode]", button => {
  drawBars("paymentChart", button.dataset.paymentMode === "count" ? data.paymentCount : data.paymentRevenue);
});

setButtonGroup("[data-product-mode]", button => {
  drawBars("productChart", button.dataset.productMode === "quantity" ? data.productQuantity : data.productRevenue, { horizontal: true });
});

document.getElementById("branchFilter").addEventListener("change", renderBranchProducts);
window.addEventListener("resize", renderAll);
