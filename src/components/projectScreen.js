// Draws the picture shown on the 3D monitor in the Work section.
// The old version played a video per project; these projects have no public footage, so the
// screen shows the one number that best summarises each, plus its steps, drawn at load time.
const W = 1024;
const H = 640;
const sans = 'ui-sans-serif, system-ui, -apple-system, "Segoe UI", sans-serif';
const mono = 'ui-monospace, "SF Mono", Menlo, Consolas, monospace';

export function drawProjectScreen(project) {
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const g = canvas.getContext('2d');
  const { value, label, lines } = project.screen;

  g.fillStyle = '#0E0E10';
  g.fillRect(0, 0, W, H);

  // title bar
  g.fillStyle = '#1C1C21';
  g.fillRect(0, 0, W, 64);
  ['#3A3A49', '#3A3A49', '#3A3A49'].forEach((c, i) => {
    g.fillStyle = c;
    g.beginPath();
    g.arc(40 + i * 30, 32, 9, 0, Math.PI * 2);
    g.fill();
  });
  g.fillStyle = '#AFB0B6';
  g.font = `28px ${mono}`;
  g.textBaseline = 'middle';
  g.fillText(project.name.toLowerCase(), 150, 33);

  // the number
  g.fillStyle = '#FFFFFF';
  g.textBaseline = 'alphabetic';
  g.font = `600 220px ${sans}`;
  g.fillText(value, 56, 300);
  g.fillStyle = '#AFB0B6';
  g.font = `46px ${sans}`;
  g.fillText(label, 60, 365);

  // steps
  g.font = `42px ${mono}`;
  lines.slice(0, 4).forEach((line, i) => {
    const y = 445 + i * 58;
    g.fillStyle = '#62646C';
    g.fillText('$', 60, y);
    g.fillStyle = '#E4E4E6';
    g.fillText(line, 108, y);
  });

  return canvas;
}
