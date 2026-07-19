// tools/quality.js - Code Quality pillar

function score() {
  console.log('Quality Engine');
  let total = 0;
  projects.showcase.forEach(p => {
    total += p.quality;
    const bar = '█'.repeat(Math.floor(p.quality/10));
    console.log(`[${p.id}] ${p.name} ${bar} ${p.quality}/100`);
  });
  console.log(`Average: ${(total/6).toFixed(1)}/100`);
}
module.exports = { score };
if (require.main === module) score();
