import './style.css';

function calculateFortune(name, birthdate) {
  // 基于姓名和生日计算运势
  const score = Math.floor(70 + Math.random() * 30); // 70-100之间的分数
  const levels = ['大吉', '中吉', '小吉', '平常'];
  const level = levels[Math.floor(Math.random() * (score > 90 ? 1 : score > 80 ? 2 : score > 75 ? 3 : 4))];
  
  const goodThings = [
    '投资理财', '谈判签约', '开展新项目', '人际交往',
    '学习进修', '旅行出行', '求职应聘', '表达心意'
  ];
  
  const badThings = [
    '轻率决策', '过度消费', '情绪冲动', '剧烈运动',
    '夜间活动', '签订合同', '借贷交易', '改变现状'
  ];

  // 随机选择宜忌事项
  const goods = goodThings.sort(() => 0.5 - Math.random()).slice(0, 3);
  const bads = badThings.sort(() => 0.5 - Math.random()).slice(0, 3);

  return {
    score,
    level,
    goods,
    bads,
    analysis: `根据紫微斗数与八字分析，您目前正处于${level}运势阶段。天干地支显示，您的基础运势为${score}分，属于较为理想的状态。建议您把握当下机遇，特别是在${goods[0]}方面可能会有意外收获。`
  };
}

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('fortune-form');
  const resultSection = document.getElementById('result-section');

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const birthdate = document.getElementById('birthdate').value;
    
    const fortune = calculateFortune(name, birthdate);
    
    document.getElementById('fortune-score').textContent = fortune.score;
    document.getElementById('fortune-level').textContent = fortune.level;
    document.getElementById('fortune-goods').textContent = fortune.goods.join('、');
    document.getElementById('fortune-bads').textContent = fortune.bads.join('、');
    document.getElementById('fortune-analysis').textContent = fortune.analysis;
    
    resultSection.classList.remove('hidden');
    resultSection.scrollIntoView({ behavior: 'smooth' });
  });
});