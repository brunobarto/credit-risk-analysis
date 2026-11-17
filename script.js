/* ============ I18N ============ */
const I18N = {
  en: {
    loading:"Charging risk model…", accent:"Accent",
    tag:"PORTFOLIO PROJECT · DATA SCIENCE · RISK", title:"Credit Risk Analysis",
    lead:"A scoring model that evaluates borrower creditworthiness, predicts default probability and turns it into lending decisions.",
    k1:"Borrowers analysed", k2:"Average credit score", k3:"Portfolio default rate", k4:"Model AUC", k5:"Expected loss (12m)",
    s1:"Financial ratio analysis", s2:"Credit score &amp; default rate", s3:"Default-risk prediction: live simulator",
    s4:"Customer segmentation", s5:"Model performance evaluation", s6:"Key business insights",
    c_ratios:"Ratio profile: performing vs defaulted", c_table:"Key ratios (median)",
    c_dist:"Score distribution &amp; default rate by band", c_pd:"PD monitoring: predicted vs actual",
    c_sim:"Score a new applicant", c_seg:"Clusters: credit score × debt-to-income", c_mix:"Portfolio mix &amp; default rate",
    c_roc:"ROC curve", c_fi:"Feature importance", c_cm:"Confusion matrix (test, n=2,500)",
    t_ratio:"Ratio", performing:"Performing", defaulted:"Defaulted", t_signal:"Red flag",
    r1:"Current ratio", r2:"Debt / Equity", r3:"Interest coverage", r4:"Return on assets", r5:"Debt-to-income",
    in_late:"Late payments (24m)", in_util:"Credit utilization %", in_dti:"Debt-to-income %", in_hist:"Credit history (years)", in_loan:"Loan amount €",
    o_pd:"Default probability", o_grade:"Grade", o_el:"Expected loss", o_dec:"Decision", o_why:"Why this score?",
    approve:"APPROVE", review:"MANUAL REVIEW", decline:"DECLINE",
    w_late:"late payment(s)", w_util:"utilization above 30%", w_dti:"debt-to-income above 20%", w_hist:"short credit history", w_none:"No penalty: excellent profile",
    cm_pd:"Pred. default", cm_pn:"Pred. no default", cm_ad:"Actual default", cm_an:"Actual no default",
    i1:"Raising the approval cut-off from 600 to 620 cuts expected defaults by 18% while losing only 6% of approvals.",
    i2:"Borrowers scoring below 450 default 12× more often than the portfolio average. Decline them automatically.",
    i3:"Payment history alone drives 31% of predictive power. Early-warning alerts on the first missed payment are the cheapest lever.",
    i4:"Repricing the Subprime segment by +2.5 pts APR would cover €0.9M of expected loss without shrinking volume.",
    foot:"Synthetic data for demonstration purposes · Logistic regression scorecard · Built with HTML/CSS/JS + Chart.js",
    m_what:"What it shows", m_read:"How to read it", m_ins:"Business insight",
    ratioLabels:["Liquidity","Quick ratio","Interest cover","Low leverage","Profitability","Cash flow / debt"],
    borrowers:"Borrowers", defRate:"Default rate %", actual:"Actual PD %", predicted:"Predicted PD %",
    months:["Dec","Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov"],
    segs:["Prime","Near-prime","Subprime","Young / thin file"],
    model:"New model (AUC 0.87)", old:"Legacy scorecard (AUC 0.75)", random:"Random (0.50)",
    feats:["Payment history","Utilization","Debt-to-income","History length","Interest coverage","Recent inquiries","Income stability"],
    share:"Share of portfolio %", score:"Credit score", dti:"Debt-to-income %",
    info:{
      ratios:{t:"Ratio profile",w:"Six financial ratios normalized on a 0–100 scale (100 = healthiest) for borrowers who repaid and those who defaulted.",r:"The larger the shape, the stronger the borrower. The gap between the two shapes shows how well each ratio separates good and bad borrowers.",i:"Interest coverage and profitability show the widest gap, so they are the strongest early warning signals for corporate clients."},
      table:{t:"Key ratios",w:"Median values of the core ratios for the two borrower groups.",r:"Compare each row: the red column is the defaulted group. The red-flag column shows the threshold used in credit policy.",i:"A borrower with a current ratio below 1.0 cannot cover short-term debts with short-term assets. This rule alone would have flagged 64% of defaults."},
      dist:{t:"Score distribution",w:"Bars: number of borrowers in each score band. Line: observed default rate in that band.",r:"Default rate falls sharply as score rises. Below 500 it is above 18%. Above 700 it is under 1.5%.",i:"The score ranks risk monotonically, which is the key property a regulator and a credit committee will check. Cut-offs can be set where the line crosses risk appetite."},
      pd:{t:"PD monitoring",w:"Predicted vs realized portfolio default rate over the last 12 months.",r:"The closer the two lines, the better calibrated the model. Gaps stay under 0.3 pts.",i:"The model is stable and does not need recalibration. The summer rise reflects seasonal stress and was anticipated by the model."},
      sim:{t:"Live simulator",w:"A simplified scorecard: each risk factor removes points from a maximum of 850. Score converts to probability of default (PD) via a logistic function.",r:"Move the sliders. The explanation list shows exactly which factor cost how many points, so every decision is explainable.",i:"Expected loss = PD × LGD (45%) × exposure. It is used for pricing and provisioning (IFRS 9). Decisions: ≥700 approve, 620–699 review, <620 decline."},
      seg:{t:"Customer segmentation",w:"K-means clustering of borrowers on credit score and debt-to-income ratio, giving 4 segments.",r:"Each dot is a borrower. Bottom-right (high score, low debt) = safest. Top-left = riskiest.",i:"Each segment deserves a different strategy: retain and upsell Prime, monitor Near-prime, reprice Subprime, and build history with Young/thin file clients."},
      mix:{t:"Portfolio mix",w:"Share of each segment in the portfolio, with its default rate in the tooltip.",r:"Hover each slice to see segment size and default rate.",i:"Subprime is only 17% of borrowers but generates ~58% of expected loss. Risk is concentrated, so actions can be targeted."},
      roc:{t:"ROC curve",w:"True positive rate vs false positive rate at every possible threshold.",r:"The more the curve hugs the top-left corner, the better. AUC 0.87 means the model ranks a random defaulter above a random good payer 87% of the time.",i:"Compared with the legacy scorecard (0.75), the new model catches about 22% more defaulters at the same false-alarm rate."},
      fi:{t:"Feature importance",w:"Relative contribution of each variable to the model's predictions.",r:"Longer bars = more influence on the score.",i:"Behavioural variables (payment history, utilization) outweigh static ones. Data collection effort should focus on fresh bureau and transaction data."},
      cm:{t:"Confusion matrix",w:"Predictions vs reality on 2,500 unseen test borrowers at a 50% PD threshold.",r:"TP = defaults caught, FN = defaults missed, FP = good clients flagged, TN = good clients approved.",i:"Recall is 78%: 4 out of 5 defaulters are caught. Low precision is acceptable because one missed default (~€11k loss) costs far more than one rejected good client (~€1.2k lost margin)."}
    }
  },
  fr: {
    loading:"Chargement du modèle de risque…", accent:"Accent",
    tag:"PROJET PORTFOLIO · DATA SCIENCE · RISQUE", title:"Analyse du Risque de Crédit",
    lead:"Un modèle de scoring qui évalue la solvabilité des emprunteurs, prédit la probabilité de défaut et la traduit en décisions de crédit.",
    k1:"Emprunteurs analysés", k2:"Score de crédit moyen", k3:"Taux de défaut du portefeuille", k4:"AUC du modèle", k5:"Perte attendue (12m)",
    s1:"Analyse des ratios financiers", s2:"Score de crédit &amp; taux de défaut", s3:"Prédiction du risque de défaut : simulateur",
    s4:"Segmentation clients", s5:"Évaluation de la performance", s6:"Insights business clés",
    c_ratios:"Profil des ratios : sains vs défaillants", c_table:"Ratios clés (médiane)",
    c_dist:"Distribution des scores &amp; taux de défaut", c_pd:"Suivi de la PD : prédite vs réelle",
    c_sim:"Scorer un nouveau demandeur", c_seg:"Clusters : score × endettement", c_mix:"Mix du portefeuille &amp; défaut",
    c_roc:"Courbe ROC", c_fi:"Importance des variables", c_cm:"Matrice de confusion (test, n=2 500)",
    t_ratio:"Ratio", performing:"Sains", defaulted:"Défaillants", t_signal:"Alerte",
    r1:"Ratio de liquidité", r2:"Dette / Fonds propres", r3:"Couverture des intérêts", r4:"Rentabilité des actifs", r5:"Taux d'endettement",
    in_late:"Retards de paiement (24m)", in_util:"Utilisation du crédit %", in_dti:"Taux d'endettement %", in_hist:"Historique de crédit (ans)", in_loan:"Montant du prêt €",
    o_pd:"Probabilité de défaut", o_grade:"Note", o_el:"Perte attendue", o_dec:"Décision", o_why:"Pourquoi ce score ?",
    approve:"ACCEPTÉ", review:"REVUE MANUELLE", decline:"REFUSÉ",
    w_late:"retard(s) de paiement", w_util:"utilisation > 30%", w_dti:"endettement > 20%", w_hist:"historique court", w_none:"Aucune pénalité : excellent profil",
    cm_pd:"Défaut prédit", cm_pn:"Pas de défaut prédit", cm_ad:"Défaut réel", cm_an:"Pas de défaut réel",
    i1:"Relever le seuil d'acceptation de 600 à 620 réduit les défauts attendus de 18 % pour seulement 6 % d'acceptations en moins.",
    i2:"Les emprunteurs sous 450 font défaut 12× plus que la moyenne. Refus automatique recommandé.",
    i3:"L'historique de paiement représente 31 % du pouvoir prédictif. Une alerte dès le premier impayé est le levier le moins coûteux.",
    i4:"Augmenter le taux du segment Subprime de +2,5 pts couvrirait 0,9 M€ de perte attendue sans réduire les volumes.",
    foot:"Données synthétiques à but démonstratif · Scorecard par régression logistique · HTML/CSS/JS + Chart.js",
    m_what:"Ce que montre le graphique", m_read:"Comment le lire", m_ins:"Insight business",
    ratioLabels:["Liquidité","Liquidité réduite","Couv. intérêts","Faible levier","Rentabilité","Cash-flow / dette"],
    borrowers:"Emprunteurs", defRate:"Taux de défaut %", actual:"PD réelle %", predicted:"PD prédite %",
    months:["Déc","Jan","Fév","Mar","Avr","Mai","Juin","Juil","Août","Sep","Oct","Nov"],
    segs:["Prime","Quasi-prime","Subprime","Jeunes / peu d'historique"],
    model:"Nouveau modèle (AUC 0,87)", old:"Ancienne scorecard (AUC 0,75)", random:"Aléatoire (0,50)",
    feats:["Historique de paiement","Utilisation","Endettement","Ancienneté crédit","Couv. intérêts","Demandes récentes","Stabilité revenus"],
    share:"Part du portefeuille %", score:"Score de crédit", dti:"Taux d'endettement %",
    info:{
      ratios:{t:"Profil des ratios",w:"Six ratios financiers normalisés sur 0–100 (100 = plus sain) pour les emprunteurs ayant remboursé et ceux en défaut.",r:"Plus la forme est grande, plus l'emprunteur est solide. L'écart entre les formes montre le pouvoir discriminant de chaque ratio.",i:"La couverture des intérêts et la rentabilité présentent le plus grand écart : ce sont les meilleurs signaux d'alerte pour les entreprises."},
      table:{t:"Ratios clés",w:"Valeurs médianes des ratios clés pour les deux groupes.",r:"Comparez chaque ligne : la colonne rouge correspond aux défaillants. La colonne alerte indique le seuil de la politique de crédit.",i:"Un ratio de liquidité < 1,0 signifie que l'entreprise ne couvre pas ses dettes court terme. Cette seule règle aurait détecté 64 % des défauts."},
      dist:{t:"Distribution des scores",w:"Barres : nombre d'emprunteurs par tranche. Ligne : taux de défaut observé.",r:"Le taux de défaut chute quand le score monte : > 18 % sous 500, < 1,5 % au-dessus de 700.",i:"Le score classe le risque de façon monotone, propriété clé vérifiée par le régulateur et le comité de crédit. Les seuils se fixent selon l'appétit au risque."},
      pd:{t:"Suivi de la PD",w:"Taux de défaut prédit vs réalisé sur 12 mois.",r:"Plus les courbes sont proches, mieux le modèle est calibré. Écarts < 0,3 pt.",i:"Le modèle est stable, pas de recalibrage nécessaire. La hausse estivale (stress saisonnier) a été anticipée."},
      sim:{t:"Simulateur",w:"Scorecard simplifiée : chaque facteur de risque retire des points sur 850. Le score est converti en probabilité de défaut (PD) par une fonction logistique.",r:"Déplacez les curseurs. La liste explicative montre le coût en points de chaque facteur : chaque décision est explicable.",i:"Perte attendue = PD × LGD (45 %) × exposition. Utilisée pour la tarification et le provisionnement (IFRS 9). ≥700 accepté, 620–699 revue, <620 refusé."},
      seg:{t:"Segmentation",w:"Clustering K-means sur score et taux d'endettement : 4 segments.",r:"Chaque point est un emprunteur. En bas à droite (score élevé, faible dette) = plus sûr.",i:"Une stratégie par segment : fidéliser Prime, surveiller Quasi-prime, repricer Subprime, accompagner les Jeunes."},
      mix:{t:"Mix du portefeuille",w:"Part de chaque segment, avec son taux de défaut au survol.",r:"Survolez chaque part pour voir taille et taux de défaut.",i:"Le Subprime pèse 17 % des clients mais ~58 % de la perte attendue : risque concentré, actions ciblables."},
      roc:{t:"Courbe ROC",w:"Taux de vrais positifs vs faux positifs pour chaque seuil.",r:"Plus la courbe épouse le coin supérieur gauche, mieux c'est. AUC 0,87 : le modèle classe un défaillant au-dessus d'un bon payeur 87 % du temps.",i:"Face à l'ancienne scorecard (0,75), le nouveau modèle détecte ~22 % de défauts en plus à taux de fausses alertes égal."},
      fi:{t:"Importance des variables",w:"Contribution relative de chaque variable aux prédictions.",r:"Barre plus longue = plus d'influence.",i:"Les variables comportementales dominent : prioriser les données bureau et transactionnelles récentes."},
      cm:{t:"Matrice de confusion",w:"Prédictions vs réalité sur 2 500 emprunteurs test, seuil PD 50 %.",r:"VP = défauts détectés, FN = défauts manqués, FP = bons clients signalés, VN = bons clients acceptés.",i:"Rappel 78 % : 4 défaillants sur 5 détectés. Une précision faible est acceptable : un défaut manqué (~11 k€) coûte bien plus qu'un bon client refusé (~1,2 k€)."}
    }
  }
};
let lang = localStorage.getItem('cr_lang') || 'en';
const t = k => k.split('.').reduce((o,p)=>o && o[p], I18N[lang]) ?? k;

function applyI18n(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el => el.innerHTML = t(el.dataset.i18n));
  document.querySelectorAll('#langBtn span').forEach(s => s.classList.toggle('on', s.dataset.l === lang));
}

/* ============ HELPERS ============ */
const $ = id => document.getElementById(id);
const css = v => getComputedStyle(document.documentElement).getPropertyValue(v).trim();
function rng(seed){return()=>{seed|=0;seed=seed+0x6D2B79F5|0;let x=Math.imul(seed^seed>>>15,1|seed);x=x+Math.imul(x^x>>>7,61|x)^x;return((x^x>>>14)>>>0)/4294967296}}
const rand = rng(42);
const gauss = () => Math.sqrt(-2*Math.log(rand()+1e-9))*Math.cos(2*Math.PI*rand());

/* ============ STARS ============ */
const cv = $('stars'), ctx = cv.getContext('2d');
let W, H, stars = [], mouse = {x:-999, y:-999};
function resize(){W = cv.width = innerWidth; H = cv.height = innerHeight;}
resize(); addEventListener('resize', resize);
for(let i=0;i<160;i++) stars.push({x:Math.random()*innerWidth, y:Math.random()*innerHeight, r:Math.random()*1.4+.3, vx:(Math.random()-.5)*.15, vy:-(Math.random()*.25+.05), ox:0, oy:0, a:Math.random()});
addEventListener('mousemove', e => {mouse.x = e.clientX; mouse.y = e.clientY;});
(function loop(){
  ctx.clearRect(0,0,W,H);
  const c = css('--star');
  stars.forEach(s=>{
    s.x += s.vx; s.y += s.vy;
    if(s.y < -5){s.y = H+5; s.x = Math.random()*W;}
    if(s.x < -5) s.x = W+5; if(s.x > W+5) s.x = -5;
    const dx = s.x + s.ox - mouse.x, dy = s.y + s.oy - mouse.y, d = Math.hypot(dx,dy);
    if(d < 130){const f = (130-d)/130*3; s.ox += dx/d*f; s.oy += dy/d*f;}
    s.ox *= .94; s.oy *= .94;
    s.a += .02;
    ctx.fillStyle = `rgba(${c},${.35+Math.sin(s.a)*.3})`;
    ctx.fillRect(s.x+s.ox, s.y+s.oy, s.r*2, s.r*2); // square stars = discrete geometry
  });
  requestAnimationFrame(loop);
})();

/* ============ LOADER ============ */
const segs = $('ldSegs');
for(let i=0;i<24;i++) segs.appendChild(document.createElement('i'));
let prog = 0;
const ldIv = setInterval(()=>{
  prog = Math.min(100, prog + Math.random()*6 + 2);
  $('ldPct').textContent = Math.floor(prog) + '%';
  const n = Math.round(prog/100*24);
  [...segs.children].forEach((s,i)=>s.classList.toggle('on', i<n));
  if(prog >= 100){
    clearInterval(ldIv);
    setTimeout(()=>{$('loader').classList.add('done'); buildCharts(); animateKPIs();}, 450);
  }
}, 80);

function animateKPIs(){
  document.querySelectorAll('.kv').forEach(el=>{
    const tgt = +el.dataset.target, dec = +el.dataset.dec, pre = el.dataset.pre||'', suf = el.dataset.suf||'';
    const t0 = performance.now();
    (function step(now){
      const p = Math.min(1,(now-t0)/1400), e = 1-Math.pow(1-p,3);
      el.textContent = pre + (tgt*e).toLocaleString(lang==='fr'?'fr-FR':'en-US',{minimumFractionDigits:dec,maximumFractionDigits:dec}) + suf;
      if(p<1) requestAnimationFrame(step);
    })(t0);
  });
}

/* ============ DATA ============ */
const scoreBands = ['300-399','400-449','450-499','500-549','550-599','600-649','650-699','700-749','750-799','800-850'];
const bandCounts = [120,260,540,980,1620,2310,2680,2150,1260,560];
const bandDef = [38.5,27.2,18.4,11.9,7.6,4.3,2.4,1.2,0.6,0.3];
const pdActual = [4.1,4.3,4.2,4.6,4.8,4.7,5.0,5.2,4.9,4.8,4.6,4.7];
const pdPred   = [4.2,4.2,4.4,4.5,4.7,4.8,4.9,5.0,5.0,4.8,4.7,4.6];
const segCenters = [{s:765,d:18,sx:30,sy:5,n:90},{s:685,d:29,sx:25,sy:6,n:80},{s:585,d:43,sx:35,sy:7,n:50},{s:640,d:22,sx:30,sy:6,n:40}];
const segPoints = segCenters.map(c=>Array.from({length:c.n},()=>({x:Math.round(c.s+gauss()*c.sx), y:+(c.d+gauss()*c.sy).toFixed(1)})));
const segShare = [38,31,17,14], segDef = [0.8,3.4,13.6,5.9];
const roc = k => Array.from({length:51},(_,i)=>{const x=i/50; return {x, y:1-Math.pow(1-x,k)};});
const featImp = [31,22,17,11,8,6,5];

/* ============ CHARTS ============ */
const charts = {};
function buildCharts(){
  Object.values(charts).forEach(c=>c.destroy());
  const ink = css('--ink'), grid = css('--grid'), acc = css('--accent'), blue = css('--blue'), yel = css('--yellow'), red = css('--red');
  Chart.defaults.color = ink;
  Chart.defaults.borderColor = grid;
  Chart.defaults.font.family = "'Inconsolata', monospace";
  Chart.defaults.font.size = 13;
  Chart.defaults.plugins.tooltip.backgroundColor = ink;
  Chart.defaults.plugins.tooltip.titleColor = css('--bg');
  Chart.defaults.plugins.tooltip.bodyColor = css('--bg');
  Chart.defaults.plugins.tooltip.cornerRadius = 0;
  Chart.defaults.plugins.legend.labels.boxWidth = 14;
  Chart.defaults.maintainAspectRatio = false;
  Chart.defaults.elements.bar.borderRadius = 0;
  const altBlue = acc.toLowerCase() === blue.toLowerCase() ? yel : blue;

  charts.ratios = new Chart($('chRatios'),{type:'radar',data:{labels:t('ratioLabels'),datasets:[
    {label:t('performing'),data:[78,72,81,70,68,75],borderColor:altBlue,backgroundColor:altBlue+'33',borderWidth:3,pointStyle:'rect',pointRadius:5},
    {label:t('defaulted'),data:[42,35,28,30,22,31],borderColor:acc,backgroundColor:acc+'44',borderWidth:3,pointStyle:'triangle',pointRadius:6}]},
    options:{scales:{r:{min:0,max:100,ticks:{display:false},grid:{color:grid},angleLines:{color:grid}}}}});

  charts.dist = new Chart($('chDist'),{data:{labels:scoreBands,datasets:[
    {type:'line',label:t('defRate'),data:bandDef,borderColor:ink,backgroundColor:ink,yAxisID:'y1',tension:.3,pointStyle:'rect',pointRadius:5,borderWidth:3},
    {type:'bar',label:t('borrowers'),data:bandCounts,backgroundColor:bandDef.map(d=>d>10?red:d>3?yel:altBlue),borderColor:ink,borderWidth:2}]},
    options:{scales:{y:{title:{display:true,text:t('borrowers')}},y1:{position:'right',grid:{display:false},title:{display:true,text:t('defRate')}},x:{ticks:{maxRotation:45,minRotation:45}}}}});

  charts.pd = new Chart($('chPD'),{type:'line',data:{labels:t('months'),datasets:[
    {label:t('actual'),data:pdActual,borderColor:acc,backgroundColor:acc+'22',fill:true,borderWidth:3,pointStyle:'rect',pointRadius:5,tension:.25},
    {label:t('predicted'),data:pdPred,borderColor:ink,borderDash:[6,4],borderWidth:2,pointRadius:0,tension:.25}]},
    options:{scales:{y:{min:3.5,max:5.6}}}});

  const segCols = [altBlue, '#2BA84A', red, yel];
  charts.seg = new Chart($('chSeg'),{type:'scatter',data:{datasets:segPoints.map((p,i)=>({label:t('segs')[i],data:p,backgroundColor:segCols[i]+'cc',borderColor:ink,borderWidth:1,pointStyle:['rect','circle','triangle','rectRot'][i],pointRadius:5}))},
    options:{scales:{x:{title:{display:true,text:t('score')},min:450,max:850},y:{title:{display:true,text:t('dti')},min:0,max:65}}}});

  charts.mix = new Chart($('chMix'),{type:'doughnut',data:{labels:t('segs'),datasets:[{data:segShare,backgroundColor:segCols,borderColor:ink,borderWidth:3}]},
    options:{cutout:'55%',plugins:{legend:{position:'bottom'},tooltip:{callbacks:{label:c=>` ${c.label}: ${c.raw}% · ${t('defRate')}: ${segDef[c.dataIndex]}%`}}}}});

  charts.roc = new Chart($('chROC'),{type:'scatter',data:{datasets:[
    {label:t('model'),data:roc(6.7),showLine:true,borderColor:acc,backgroundColor:acc+'22',fill:true,borderWidth:3,pointRadius:0},
    {label:t('old'),data:roc(3),showLine:true,borderColor:altBlue,borderWidth:2,pointRadius:0},
    {label:t('random'),data:[{x:0,y:0},{x:1,y:1}],showLine:true,borderColor:ink,borderDash:[5,5],borderWidth:1.5,pointRadius:0}]},
    options:{plugins:{legend:{labels:{font:{size:11}}}},scales:{x:{min:0,max:1,title:{display:true,text:'FPR'}},y:{min:0,max:1,title:{display:true,text:'TPR'}}}}});

  charts.fi = new Chart($('chFI'),{type:'bar',data:{labels:t('feats'),datasets:[{label:'%',data:featImp,backgroundColor:featImp.map((_,i)=>i<2?acc:i<4?altBlue:yel),borderColor:ink,borderWidth:2}]},
    options:{indexAxis:'y',plugins:{legend:{display:false},tooltip:{callbacks:{label:c=>` ${c.raw}%`}}},scales:{x:{ticks:{callback:v=>v+'%'}}}}});
}

/* ============ SIMULATOR ============ */
const fmtEur = v => new Intl.NumberFormat(lang==='fr'?'fr-FR':'en-US',{style:'currency',currency:'EUR',maximumFractionDigits:0}).format(v);
function simulate(){
  const late=+$('iLate').value, util=+$('iUtil').value, dti=+$('iDti').value, hist=+$('iHist').value, loan=+$('iLoan').value;
  $('vLate').textContent=late; $('vUtil').textContent=util+'%'; $('vDti').textContent=dti+'%'; $('vHist').textContent=hist; $('vLoan').textContent=fmtEur(loan);
  const pen = [
    {v:late*35, l:`${late} ${t('w_late')}`},
    {v:Math.max(0,util-30)*2, l:t('w_util')},
    {v:Math.max(0,dti-20)*3, l:t('w_dti')},
    {v:Math.max(0,10-hist)*8, l:t('w_hist')}
  ].filter(p=>p.v>0).map(p=>({...p, v:Math.round(p.v)}));
  const score = Math.max(300, Math.min(850, 850 - pen.reduce((a,p)=>a+p.v,0)));
  const pd = 1/(1+Math.exp((score-560)/45));
  const grade = score>=760?'A':score>=700?'B':score>=640?'C':score>=580?'D':'E';
  const dec = score>=700?'approve':score>=620?'review':'decline';
  $('oScore').textContent = score;
  $('oMk').style.left = `calc(${(score-300)/550*100}% - 3px)`;
  $('oPD').textContent = (pd*100).toFixed(1)+'%';
  $('oGrade').textContent = grade;
  $('oEL').textContent = fmtEur(pd*0.45*loan);
  const d = $('oDec'); d.textContent = t(dec); d.className = 'dec '+dec;
  $('oWhy').innerHTML = pen.length ? pen.sort((a,b)=>b.v-a.v).map(p=>`<li><b>−${p.v}</b> pts · ${p.l}</li>`).join('') : `<li>${t('w_none')}</li>`;
}
['iLate','iUtil','iDti','iHist','iLoan'].forEach(id=>$(id).addEventListener('input',simulate));

/* ============ MODAL ============ */
const modal = $('modal');
document.querySelectorAll('.info').forEach(b=>b.addEventListener('click',()=>{
  const k = b.dataset.info, inf = t('info')[k];
  $('mTitle').textContent = inf.t; $('mWhat').textContent = inf.w; $('mRead').textContent = inf.r; $('mIns').textContent = inf.i;
  modal.classList.add('open');
}));
$('mClose').onclick = () => modal.classList.remove('open');
modal.addEventListener('click', e => {if(e.target===modal) modal.classList.remove('open');});
addEventListener('keydown', e => {if(e.key==='Escape') modal.classList.remove('open');});

/* ============ SWITCHES ============ */
$('langBtn').onclick = () => {
  lang = lang==='en' ? 'fr' : 'en';
  localStorage.setItem('cr_lang', lang);
  applyI18n(); simulate(); buildCharts(); animateKPIs();
};

const savedTheme = localStorage.getItem('cr_theme');
if(savedTheme) document.documentElement.dataset.theme = savedTheme;
$('themeBtn').onclick = () => {
  const th = document.documentElement.dataset.theme==='dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = th;
  localStorage.setItem('cr_theme', th);
  buildCharts();
};

function setAccent(c){
  document.documentElement.style.setProperty('--accent', c);
  $('accentInput').value = c;
  document.querySelectorAll('.sw').forEach(s=>s.classList.toggle('active', s.dataset.c.toLowerCase()===c.toLowerCase()));
  localStorage.setItem('cr_accent', c);
  if(charts.ratios) buildCharts();
}
document.querySelectorAll('.sw').forEach(s=>s.onclick=()=>setAccent(s.dataset.c));
$('accentInput').addEventListener('input', e=>setAccent(e.target.value));

/* ============ INIT ============ */
setAccent(localStorage.getItem('cr_accent') || '#D7263D');
applyI18n();
simulate();
