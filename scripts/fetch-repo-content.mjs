/**
 * Downloads the README (the actual content/resources) of every listed interview-prep
 * repo into src/content/repos/ and generates src/content/repoIndex.ts.
 *
 * Usage: node scripts/fetch-repo-content.mjs   (rerun anytime; already-fetched files are kept)
 */
import { mkdirSync, writeFileSync, existsSync, readFileSync, appendFileSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const outDir = join(__dirname, '..', 'src', 'content', 'repos');
const indexPath = join(__dirname, '..', 'src', 'content', 'repoIndex.ts');
const failLog = join(__dirname, '..', 'src', 'content', 'fetch-misses.txt');
mkdirSync(outDir, { recursive: true });

// [repo, stars, language] — the user's curated list (400 repos)
const REPOS = [
["aishwaryanr/awesome-generative-ai-guide",29910,"HTML"],
["alirezadir/AIMLInterviews",9899,"Jupyter Notebook"],
["sadanandpai/javascript-code-challenges",4466,"MDX"],
["ombharatiya/ai-system-design-guide",3691,""],
["Natively-AI-assistant/natively-cluely-ai-assistant",3058,"TypeScript"],
["genieincodebottle/generative-ai",2650,"Jupyter Notebook"],
["Exorust/TorchLeet",2583,"Jupyter Notebook"],
["RezaSi/go-interview-practice",2489,"Go"],
["pallavi-shekhar/ai-engineering-interview-questions-company-wise",1773,"Markdown"],
["FazeelUsmani/Amazon-SDE-Preparation",1570,"C++"],
["cookiy-ai/user-research-skill",1568,""],
["Tameyer41/liftoff",1528,"TypeScript"],
["zixian2021/AI-interview-cards",1353,""],
["jackaduma/awesome_LLMs_interview_notes",1319,""],
["FoloUp/FoloUp",1277,"TypeScript"],
["AnnaSuSu/TechSpar",1129,"TypeScript"],
["Devinterview-io/llms-interview-questions",1075,""],
["wdndev/ai_interview_note",887,"Python"],
["guocong-bincai/ai-interview-guide",839,""],
["offercontext/offerPilot",752,"Python"],
["AIR-hl/llm-interview-code",639,"Jupyter Notebook"],
["bbruceyuan/AI-Interview-Code",620,"Jupyter Notebook"],
["wanshuiyin/ARIS-in-AI-Offer",613,"Python"],
["adrianhajdin/ai_mock_interviews",574,"TypeScript"],
["Nanako0129/coralline",548,"PowerShell"],
["girijesh-ai/ai-interview-codex",532,"Python"],
["Devinterview-io/sql-interview-questions",428,""],
["vijaygupta18/system-design-simulator",414,"TypeScript"],
["charliegerard/mock-interview-questions",392,""],
["jennifer88huang/interview-skills",381,"JavaScript"],
["Active-Courses/ACU",371,""],
["CHENG-LIANG1/real-company-interview-ai-coding-projects",361,""],
["Devinterview-io/pytorch-interview-questions",360,""],
["ivnvxd/hack-interview",330,"Python"],
["whaleonearth/MLE-DS-Interview-Prep-Guide",322,""],
["iskandaryv/meetingly-ai",309,"TypeScript"],
["karanb192/algo-sensei",295,"Python"],
["jiatastic/GPTInterviewer",264,"Python"],
["he-yufeng/FindJobs-Agent",242,"Python"],
["xgwangdl/AI-Interview",234,"Java"],
["Hazehacker/backend-interview-simulator",228,""],
["h9-tec/Production_GenAI_interview",221,""],
["zixi-liu/interview-ai-prototype",217,"Python"],
["1146345502/aural-oss",216,"TypeScript"],
["Devinterview-io/data-scientist-interview-questions",212,""],
["ombharatiya/AI-Engineer-Interview-Questions",209,"Python"],
["HimankSehgal/AI-interview-prep",206,""],
["shubhamshnd/Open-Cluely",183,"JavaScript"],
["javadhme/android-interview-questions",156,""],
["jlifeng/JobPilot",145,"TypeScript"],
["XUZIAa/Multi-Agent-Mock-Interview",143,"Python"],
["anurag3407/career-pilot",137,"JavaScript"],
["Devinterview-io/computer-vision-interview-questions",131,""],
["IliaLarchenko/Interviewer",126,"Python"],
["modamaan/Ai-mock-Interview",119,"JavaScript"],
["les1016/ai-digital-interview",114,"Python"],
["Devinterview-io/nlp-interview-questions",114,""],
["oleg-koval/counter-interview.dev",113,"SCSS"],
["PrepLabsAI/InterviewMentor",113,""],
["aryasoni98/AI-Interview",111,"JavaScript"],
["Devinterview-io/data-engineer-interview-questions",107,""],
["low-hands/MyCareer",102,"Python"],
["nicobytes/interview-full-stack",96,"TypeScript"],
["Devinterview-io/data-analyst-interview-questions",93,""],
["kirilxd/swe-interview-coach",90,"Shell"],
["rupaai/interview-preparation-faang",85,""],
["fenlili0108-source/interview-coach",82,"Python"],
["Devinterview-io/deep-learning-interview-questions",82,""],
["chen3tu/interview-master-skill",80,"Python"],
["Devinterview-io/pandas-interview-questions",74,""],
["Azzedde/aiva_mock_interviews",72,"Python"],
["Devinterview-io/recommendation-systems-interview-questions",69,""],
["Devinterview-io/reinforcement-learning-interview-questions",68,""],
["olelehmann1337/interview-skill",61,""],
["ngoanpv/DeepInterview",61,"Python"],
["MiguelCovarrubiasdaiz/devbymike-js-interview-lab",61,"JavaScript"],
["Devinterview-io/python-ml-interview-questions",59,""],
["AbhishekChauhan9036/Newton-School-Mock-Interview-Questions",59,"Java"],
["darrylschaefer/mock-interviews-with-ai",58,"JavaScript"],
["Devinterview-io/mlops-interview-questions",56,""],
["Devinterview-io/statistics-interview-questions",55,""],
["Abhi5h3k/Phantom-AI-Interview",54,"Python"],
["Devinterview-io/linear-regression-interview-questions",52,""],
["Vijaysingh1621/AI-powererd-interview-Assistant",50,"TypeScript"],
["analyticsbot/ai-ml-code-interviewer",49,"Python"],
["beingamanforever/Tech-Enhanced-AI-Interview-Learning-Platform",48,"Jupyter Notebook"],
["amankumar0724/SkillView-Next-Project",48,"TypeScript"],
["Devinterview-io/time-series-interview-questions",45,""],
["mrpkdeveloper/CodeConnect",44,"JavaScript"],
["Devinterview-io/cnn-interview-questions",42,""],
["Mahalakshmi-Design-Studioz/ai-mock-interview-react-vite-typescript-january-2025",39,"TypeScript"],
["foyzulkarim/mock-interviews-2023",39,""],
["rrs301/AI-Interview-mocker",38,"JavaScript"],
["donnemartin/system-design-primer",375139,"Python"],
["Snailclimb/JavaGuide",159206,"JavaScript"],
["yangshun/tech-interview-handbook",143111,"TypeScript"],
["ByteByteGoHq/system-design-101",90632,""],
["binhnguyennus/awesome-scalability",74968,""],
["karanpratapsingh/system-design",46599,""],
["yangshun/front-end-interview-handbook",44008,"JavaScript"],
["ashishps1/awesome-system-design-resources",42681,"Java"],
["systemdesign42/system-design-academy",29449,""],
["ashishps1/awesome-low-level-design",27518,"Java"],
["liquidslr/system-design-notes",26835,""],
["checkcheckzz/system-design-interview",23860,""],
["khangich/machine-learning-interview",12846,""],
["madd86/awesome-system-design",12633,""],
["shashank88/system_design",9279,""],
["greatfrontend/awesome-front-end-system-design",8558,""],
["prasadgujar/low-level-design-primer",7963,""],
["weeeBox/mobile-system-design",5852,""],
["teivah/algodeck",5845,"HTML"],
["javabuddy/best-system-design-resources",4496,""],
["NotFound9/interviewGuide",4019,"Java"],
["kunal-kushwaha/Competitive-Programming-Resources",3928,""],
["rohan-paul/Awesome-JavaScript-Interviews",3744,"JavaScript"],
["puncsky/system-design-and-architecture",3601,"Makefile"],
["Admol/SystemDesign",3079,""],
["colinlet/PHP-Interview-QA",2966,"TypeScript"],
["Java-Edge/Java-Interview-Tutorial",2863,"Shell"],
["arpit20adlakha/Data-Structure-Algorithms-LLD-HLD",2664,""],
["jeanboydev/Android-ReadTheFuckingSourceCode",2565,"HTML"],
["study8677/awesome-architecture",2463,"Vue"],
["sachuverma/DataStructures-Algorithms",2255,"C++"],
["codersguild/System-Design",2178,""],
["DreamOfTheRedChamber/system-design-interviews",2139,"Java"],
["kumaransg/LLD",2072,"Java"],
["neerazz/FAANG",1900,"Java"],
["armankhondker/best-system-design-resources",1434,""],
["NirmalSilwal/system-design-resources",1405,""],
["sharanyaa/grok_sdi_educative",1366,""],
["soulmachine/system-design",1366,""],
["Yonet/Angular-Interview-Questions",1173,""],
["aershov24/full-stack-interview-questions",1138,""],
["OpesanyaAdebayo/systems-design",1053,""],
["devkodeio/frontend-system-design",1048,""],
["imkgarg/Awesome-Software-Engineering-Interview",1042,""],
["junfanz1/Awesome-Senior-Engineer-Algorithms-Review",1038,""],
["kevingo/system-design-primer-zh-tw",964,"Python"],
["sumitsojha88/Placement-Preparation",960,"C++"],
["ghoshsuman845/frontend-interview-preparation-kit",907,""],
["handbook-academy/engineering-handbook",833,"JavaScript"],
["summerjava/system-design-interview",769,""],
["mister0/How-to-prepare-for-google-interview-SWE-SRE",747,""],
["ayush-that/codejeet",577,"TypeScript"],
["sid24rane/System-Design-Interview-Questions",567,""],
["Hainrixz/the-architect",560,""],
["kousiknath/LowLevelDesign",526,"Java"],
["bmadone/senior-software-engineer",457,""],
["amitshekhariitbhu/machine-learning-interview-questions",443,"Markdown"],
["proyecto26/TheJobInterviewGuide",441,""],
["teivah/designdeck",400,""],
["Sunchit/SystemDesignInterviewPreparationSeries",383,""],
["naqushab/ScalerAcademy",361,"Python"],
["design-gurus/grokking-system-design",350,""],
["Meet-Coder-Study/book-system-design-interview",314,""],
["abhiagx/InterviewBit",269,"C++"],
["sbvkrishna/low-level-design",263,""],
["engineerchirag/front-end-system-design",259,""],
["anomaly2104/cache-low-level-system-design",222,"Java"],
["lukeTheNeuromancer/system-design-notes-zh",208,""],
["vladimir-maslov/system-design-roadmap",197,""],
["tzheng/SystemDesign",181,"Java"],
["resumejob/system-design-in-practice",180,""],
["ather-techie/rag-interview-system",167,"JavaScript"],
["archondevio/archondev",164,""],
["eileen-code4fun/SystemDesignInterviews",163,""],
["JoshithReddyAleti/AI_Engineer_Interview_Prep",153,""],
["vishalmusale/Grokking-Modern-System-Design-Interview",152,""],
["mjyc/awesome-robotics-system-design",151,""],
["anomaly2104/chess-low-level-system-design",144,"Java"],
["julianommartins/tech-interview-handbook",139,""],
["wuyichen24/system-design-interview",132,""],
["DesignNerds/SystemDesign-Playbook",131,""],
["BenGJ10/Placement-Preparation",115,""],
["santtiago49/system-design-trainer",115,"TypeScript"],
["mrbajaj/system-design",113,""],
["jkaus324/machine-coding-interview-questions",106,"JavaScript"],
["SaadAAkash/android-interview-essentials",106,""],
["piercelamb/deep-plan",101,"Python"],
["mikinty/Hardware-Engineer-Interview-Questions",100,""],
["nikhilagrwl07/System-Design",96,"Java"],
["savitansh/SystemDesignInterview",93,""],
["ardiereally/sysdesign-references",93,""],
["vennamprasad/awesome-mobile-interviews",89,"HTML"],
["ted-ly/system-design-interview",86,""],
["TharunKumarReddyPolu/LLD-Handbook-for-Coding-Interviews",80,"JavaScript"],
["sameerkali/React_coding_round_practice",76,"JavaScript"],
["aershov24/coding-interview-questions",76,""],
["zengtian006/SystemDesign",73,""],
["zxypro1/algolocal",64,"JavaScript"],
["JayrajSinh16/CS-Fundamentals-Interview",59,""],
["umitkacar/awesome-interview",58,"Python"],
["exajobs/software-engineering-interview-collection",54,"Java"],
["gbajaj/interviewready",53,"Kotlin"],
["shubhag/systemdesign",50,""],
["hadkins1/Grokking-the-System-Design",45,""],
["buildrun-tech/system-design-interview-ticketmasters",44,"JavaScript"],
["abruzzi/system-design-interview-fe",44,""],
["BarisYazici/ml_robotics_interview_prep",43,"HTML"],
["mohllal/high-level-design-interview-prep",43,"Shell"],
["yschen25/Get_A_Job_Abroad_Experiences",43,""],
["mertkahyaoglu/atlas",43,"TypeScript"],
["abhaypaswan/lld-python",42,"Python"],
["mdfraz13/System-Design-Notes",42,""],
["anomaly2104/multi-level-cache-low-level-system-design",42,"Java"],
["samovich2615/grokking-system-design",39,"Shell"],
["JavaJub/java-interview",38,"JavaScript"],
["ido777/system-design-primer-update",38,"HTML"],
["ftvision/system-design-skill",37,"Shell"],
["Abdelrhman-Samir-99/Preparation-Library",35,""],
["jwasham/coding-interview-university",363255,""],
["trekhleb/javascript-algorithms",196688,"JavaScript"],
["DopplerHQ/awesome-interview-questions",85124,""],
["kdn251/interviews",65308,"Java"],
["ai-job-search-dev/ai-job-search",63376,"Python"],
["SimplifyJobs/Summer2027-Internships",48088,"Python"],
["sudheerj/reactjs-interview-questions",44908,"JavaScript"],
["huihut/interview",38252,"C++"],
["TheAlgorithms/C-Plus-Plus",34784,"C++"],
["haizlin/fe-interview",26259,"JavaScript"],
["kunal-kushwaha/DSA-Bootcamp-Java",24039,"Java"],
["TheAlgorithms/Go",18233,"Go"],
["OpenGenus/cosmos",13745,"C++"],
["AkashSingh3031/The-Complete-FAANG-Preparation",12297,"Jupyter Notebook"],
["mxssl/sre-interview-prep-guide",9227,""],
["ashishps1/awesome-behavioral-interviews",8958,""],
["lgwebdream/FE-Interview",7206,"JavaScript"],
["paddingme/Front-end-Web-Development-Interview-Question",6845,"HTML"],
["ReaVNaiL/New-Grad-2024",6135,"Python"],
["ombharatiya/FAANG-Coding-Interview-Questions",6075,""],
["liyupi/mianshiya",5994,"TypeScript"],
["forthespada/InterviewGuide",5954,""],
["kamyu104/LeetCode-Solutions",5953,"C++"],
["perixtar/Tech-OA-Interview-Questions",5702,"Python"],
["HIT-Alibaba/interview",5246,"Shell"],
["FAQGURU/FAQGURU",5062,""],
["WeThinkIn/AIGC-Interview-Book",5044,"Python"],
["sudheerj/angular-interview-questions",4953,""],
["BoltzmannEntropy/interviews.ai",4897,""],
["Chanda-Abdul/Several-Coding-Patterns-for-Solving-Data-Structures-and-Algorithms-Problems-during-Interviews",4851,""],
["sadanandpai/frontend-learning-kit",4696,""],
["JsonChao/Awesome-Android-Interview",4615,""],
["YauhenKavalchuk/interview-questions",4572,""],
["nas5w/interview-guide",4311,"Astro"],
["leetcode-mafia/cheetah",4258,"Swift"],
["anushka23g/Complete-Placement-Preparation",4088,"Python"],
["LiangJunrong/document-library",3878,"CSS"],
["aasthas2022/SDE-Interview-and-Prep-Roadmap",3801,"Python"],
["amitshekhariitbhu/ai-engineering-interview-questions",3523,"Markdown"],
["coffe1891/frontend-hard-mode-interview",3516,"JavaScript"],
["alexgurr/react-coding-challenges",3426,"SCSS"],
["Snailclimb/interview-guide",3403,"Java"],
["mgechev/google-interview-preparation-problems",3292,"JavaScript"],
["resumejob/interview-questions",3267,""],
["SadServers/sadservers",3008,"HCL"],
["rachitiitr/DataStructures-Algorithms",2957,"C++"],
["iamsrikanthnani/pluely",2752,"TypeScript"],
["yisainan/web-interview",2741,"JavaScript"],
["sudheerj/vuejs-interview-questions",2714,""],
["SamirPaulb/DSAlgo",2611,"Python"],
["b7leung/MLE-Flashcards",2517,""],
["kunal-kushwaha/DevOps-Bootcamp",2430,""],
["helloworldbyprince/Complete-DSA-Preparation",2426,"SCSS"],
["liyin2015/python-coding-interview",2324,"TeX"],
["taoran92/EasyJob",2262,""],
["darshanime/notes",2185,""],
["semlinker/reactjs-interview-questions",2167,"JavaScript"],
["PavelGrigoryevDS/awesome-data-analysis",2122,""],
["ZhongYi-LinuxDriverDev/EmbeddedSoftwareEngineerInterview",2058,""],
["realabbas/big-companies-interview-questions",1883,""],
["Awesome-Interview/Awesome-Interview",1845,""],
["FreeTymeKiyan/LeetCode-Sol-Res",1708,"Java"],
["LjyYano/Thinking_in_Java_MindMapping",1691,"Python"],
["iamtodor/data-science-interview-questions-and-answers",1674,""],
["Garvit244/Leetcode",1568,"Python"],
["knaxus/problem-solving-javascript",1475,"JavaScript"],
["vvscode/js--interview-questions",1420,""],
["tech-cow/leetcode",1348,"Python"],
["rongweihe/CPPNotes",1301,"C++"],
["NotHarshhaa/DevOps-Interview-Questions",1281,""],
["smv1999/CompetitiveProgrammingQuestionBank",1279,"C++"],
["qcha/JBook",1225,""],
["dashvlas/awesome-ios-interview",1204,""],
["FEGuideTeam/FEGuide",1189,""],
["connor11528/cs-fundamentals",1154,"JavaScript"],
["TechyCSR/OpenCluely",1124,"JavaScript"],
["theEmbeddedGeorge/theEmbeddedNewTestament.github.io",1089,"C"],
["iam-veeramalla/devops-interview-preparation-guide",1073,""],
["pengMaster/BestNote",1069,""],
["DEBAGanov/interview_questions",1061,""],
["arpankg/ctci-python-solutions",1057,""],
["Lau-Jonathan/LLM-Agent-Interview-Guide",1019,""],
["devAmoghS/Python-Interview-Problems-for-Practice",992,"Jupyter Notebook"],
["Codensity30/Strivers-A2Z-DSA-Sheet",992,"C++"],
["omonimus1/competitive-programming",980,"C++"],
["dingran/quant-notes",979,"Jupyter Notebook"],
["wingkwong/leetcode-the-hard-way",954,"MDX"],
["warycat/rustgym",935,"Rust"],
["NotHarshhaa/into-the-devops",920,"Python"],
["xoraus/CrackingTheSQLInterview",907,""],
["jayinai/ml-interview",904,"Jupyter Notebook"],
["ashuray/InterviewRoom",849,""],
["rampatra/Algorithms-and-Data-Structures-in-Java",836,"Java"],
["bhartik021/SDE-Interview-Materials",834,""],
["Just-A-Visitor/Algorithmic-Pseudocode",786,"TeX"],
["sanchit0496/reactjs-machine-coding-challenges",779,"JavaScript"],
["ignacio-chiazzo/Algorithms-Leetcode-Javascript",757,"JavaScript"],
["vinta/fuck-coding-interviews",746,"Python"],
["kansiris/SQL-interview-questions",722,""],
["security-prince/Application-Security-Engineer-Interview-Questions",690,""],
["ramanagali/Interview_Guide",677,"HTML"],
["ishwarrimal/frontend-interview-preparation",675,"JavaScript"],
["coditori/highly-skilled-job-offers",654,""],
["kamyu104/LintCode",631,"C++"],
["PriontoAbdullah/Frontend-Interview-Preparation-for-Interns-and-Junior-Developers",629,""],
["Vasu7389/ReactJs-Interview-Question",614,""],
["Devinterview-io/node-interview-questions",604,""],
["s-kachroo/SamsungPractice",601,"C++"],
["Nabagata/interview-prep",596,"C++"],
["karansaxena/STL_Cheat_Sheets",593,""],
["Saran-pariyar/100_Days_Of_Frontend_Interview_Questions",591,""],
["sastava007/Tech-Interview-Preparation",564,"C++"],
["Devinterview-io/oop-interview-questions",562,""],
["Devinterview-io/java-interview-questions",559,""],
["TharunKumarReddyPolu/DSA-Handbook-for-Coding-Interviews",550,""],
["sashakid/ios-guide",546,""],
["yashasvigirdhar/Interview-Preparation",540,""],
["FedorovAlexander/Front-end-Job-Interview-Questions",533,""],
["KreakEmp/InterviewPrep",527,""],
["Kirchhoff-/Android-Interview-Questions",511,""],
["jassics/security-interview-questions",502,""],
["krishnasagrawal/Java-Programming-Notes",500,""],
["fatosmorina/machine-learning-exams",487,""],
["piyush-eon/frontend-interview-questions",484,"JavaScript"],
["das-jishu/algoexpert-data-structures-algorithms",482,"Python"],
["JiayangWu/LeetCode-Python",477,"Python"],
["Devinterview-io/python-interview-questions",472,""],
["insideofdrop/Dropbox-Interview-Prep",468,"Python"],
["nathan-abela/HackerRank-Solutions",468,"Python"],
["MahdiMashrur/Awesome-Coding-Interview-Question-Patterns",463,""],
["dvsusan/susanSayJava",458,""],
["yan-michael/SWE-Interview-Questions",452,""],
["Ishan-sinha/DSA-for-SDE-interview",437,"Java"],
["lanxuezaipiao/IT-Interviews-Sharing",430,"Java"],
["shrutikapoor08/react-coding-interview-questions",426,"JavaScript"],
["khan4019/angular-interview-questions",389,"HTML"],
["DivyaGodayal/CoderChef-Kitchen",378,"Python"],
["Devinterview-io/aws-interview-questions",356,""],
["gowthamrajk/InterviewPreparationKit",348,"C"],
["magicapple123/ResumeForge",347,"Python"],
["shubhanshurav/Interview-Preparation-Notes",344,"Jupyter Notebook"],
["NarendraKoya999/Frontend-Machine-Coding-Interview-Questions",311,""],
["Devinterview-io/golang-interview-questions",309,""],
["aershov24/typescript-interview-questions",288,""],
["p0dyakov/flutter_interview",285,""],
["Devinterview-io/react-interview-questions",284,""],
["MDSADABWASIM/Toughest",277,"Dart"],
["SAKET-SK/Programming-Aptitude-Interview-Prep",275,"Java"],
["tiationg-kho/leetcode-pattern-500",264,"Python"],
["imhq/rust-interview-handbook",260,""],
["nomadicmehul/CloudCaptain",255,"TypeScript"],
["Jaynil1611/Javascript-Interview-Preparation",254,"JavaScript"],
["DevLoversTeam/devlovers.net",254,"TypeScript"],
["justsandip/flutter-interview-questions",250,"MDX"],
["AlgorithmCrackers/Interview-Questions",246,"Java"],
["INGInious/INGInious",243,"Python"],
["burakorkmez/remote-interview-platform",241,"TypeScript"],
["teja963/Advanced-DSA-and-CS-Theory",239,"C++"],
["kaarthic/interview-preparation",236,""],
["deepaktalwardt/interview-prep-cpp",233,"C++"],
["Devinterview-io/javascript-interview-questions",225,""],
["ram-sah/LinkedIn-Assessments",222,""],
["sanchit0496/vanilla-js-machine-coding-challenges",221,"JavaScript"],
["kaushal02/interview-coding-problems",218,"C++"],
["srsandy/Data-Structures-and-Algorithms-in-Java-2nd-Edition-by-Robert-Lafore",213,"Java"],
["Java-aid/Interview-Preparations",210,"Java"],
["maze-runnar/interview-preparation-kit",210,"Java"],
["murex/Dev-Interview-Preparation",210,""],
["Devinterview-io/typescript-interview-questions",209,""],
["thundergolfer/interview-with-python",207,""],
["shobhakartiwari/iOS_Lead_Interview",197,""],
["Krishna18062005/Zoho_Preparation",195,"Java"],
["blindlobstar/go-interview-problems",195,"Go"],
["ThinamXx/ML..Interview..Preparation",189,""],
["DenisLitvin/iOS-Interview",188,"Swift"],
["mrhrifat/nextjs-interview-questions",187,""],
["17tanya/Leetcode-Data-Structures-and-Algorithms",186,"Java"],
["zakariamaaraki/RemoteCodeCompiler",186,"Java"],
["Devinterview-io/css-interview-questions",181,""],
["altafjava/spring-interview-questions-answers",179,""],
["masmahbubalom/InterviewQuestions",177,""],
["Devinterview-io/html5-interview-questions",177,""],
["defer-panic/awesome-go-interview",172,"Shell"],
["ashishtele/Quick-Notes-for-ML-DS",170,""],
["muhualing/coding-interview-chinese",170,"TeX"],
["Victoria-Pinzhen-Liao/InterviewPreparation-Chinese",169,""],
["ArminShaikhy/frontend-interview-questions",169,"CSS"],
["sunil12738/frontend-developer-interview-questions",169,""],
["Extremesarova/data-science-resources",168,""]
];

const categorize = (repo) => {
  const r = repo.toLowerCase();
  if (/(^|[^a-z])(ai|llm|ml|genai|aigc|machine-learning|deep-learning|mlops|pytorch|torch|nlp|cv|pandas|statistics|rag|gpt|data-science|data-scientist|data-engineer|data-analyst|recommendation|reinforcement|cnn|time-series|linear-regression|neural|quant|llms)([^a-z]|$)/.test(r) && !/system-design|backend-interview-simulator/.test(r)) return 'AI / ML & Data';
  if (/mock|coach|mentor|gptinterviewer|meetingly|interviewer|ai-interview|career|job|offerpilot|resumeforge|pluely|liftoff|coralline|skill/.test(r) && /ai|agent|gpt|cluely|pilot|pluely|liftoff|coralline/.test(r)) return 'AI / ML & Data';
  if (/system-design|system_design|systems-design|sysdesign|sdi|scalability|architecture|low-level-design|(^|[^a-z])lld|(^|[^a-z])hld|designdeck|grokking-the-system|grokking-system|design-101|design-notes|design-academy|design-trainer|design-primer|design-resources|design-skill|design-playbook|design-in-practice|design-roadmap|design-simulator|multi-level-cache|cache-low-level|chess-low-level|ticketmasters|robotics-system|mobile-system-design|front-end-system-design|frontend-system-design|design-interview-fe|the-architect|hardware-engineer/.test(r)) return 'System Design';
  if (/behavioral/.test(r)) return 'Behavioral';
  if (/sql|pandas|data-science|data-analysis/.test(r)) return 'SQL & Data';
  if (/devops|sre|security|aws|into-the-devops|sadservers|devsecops|spring-interview/.test(r)) return 'DevOps & Security';
  if (/react|angular|vue|frontend|front-end|fe-interview|fe-interview|javascript-interview|js--|css|html|node|web-interview|android|ios|mobile|flutter|nextjs|vanilla-js|machine-coding|fe-guide|feguide|php|turbo|web-development/.test(r)) return 'Frontend & Mobile';
  if (/leetcode|(^|[^a-z])dsa|algorithm|algo|data-structure|datastructures|coding-interview|coding-pattern|coding-challenge|competitive|ctci|interviewbit|lintcode|hacker(rank)|problem-solving|striver|cheetah|rustgym|blind|patterns|placement|java-guide|javaguide|interview-guide$|cs-fundamentals|oop|stl|programming-question|tech-interview-handbook|tech-interview|interview-preparation|prep|faang|interviews($|-)|question|interview($|-)|notes|guide|library|prep|java|cpp|c-plus|golang|go-interview|questions/.test(r)) return 'General Prep';
  return 'General Prep';
};

const slugFile = (repo) => repo.replace(/[^a-zA-Z0-9]+/g, '__');
const fetchWithTimeout = async (url, ms = 12000) => {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), ms);
  try {
    const res = await fetch(url, { signal: ctrl.signal, headers: { 'User-Agent': 'content-import' } });
    clearTimeout(t);
    if (!res.ok) return null;
    return await res.text();
  } catch { clearTimeout(t); return null; }
};

const BRANCHES = ['HEAD', 'main', 'master'];
const READMES = ['README.md', 'readme.md', 'README.MD', 'README', 'Readme.md'];

async function getReadme(repo) {
  for (const branch of BRANCHES) {
    for (const file of READMES) {
      const text = await fetchWithTimeout(`https://raw.githubusercontent.com/${repo}/${branch}/${file}`);
      if (text && text.length > 100) return text;
    }
  }
  return null;
}

// Bounded parallelism
async function runPool(items, worker, concurrency) {
  const results = new Array(items.length);
  let i = 0;
  const runners = Array.from({ length: concurrency }, async () => {
    while (i < items.length) {
      const idx = i++;
      results[idx] = await worker(items[idx], idx);
    }
  });
  await Promise.all(runners);
  return results;
}

let fetched = 0, skipped = 0;
const misses = [];

const results = await runPool(REPOS, async ([repo, stars, language], n) => {
  const file = slugFile(repo);
  const path = join(outDir, `${file}.md`);
  if (existsSync(path) && readFileSync(path, 'utf8').length > 100) {
    skipped++;
  } else {
    const text = await getReadme(repo);
    if (text) {
      writeFileSync(path, text);
      fetched++;
    } else {
      misses.push(repo);
      return null;
    }
  }
  if ((n + 1) % 50 === 0) console.log(`  …${n + 1}/${REPOS.length}`);
  return { repo, stars, language, category: categorize(repo), file: `${file}.md` };
}, 16);

const index = results.filter(Boolean);

const ts = `// AUTO-GENERATED by scripts/fetch-repo-content.mjs — do not edit by hand.
export interface RepoContentEntry {
  repo: string;
  stars: number;
  language: string;
  category: string;
  file: string;
}

export const repoIndex: RepoContentEntry[] = ${JSON.stringify(index, null, 1)};

export const repoCategories: string[] = ${JSON.stringify([...new Set(index.map((e) => e.category))].sort())};
`;
writeFileSync(indexPath, ts);
writeFileSync(failLog, misses.join('\n') + (misses.length ? '\n' : ''));

console.log(`✓ fetched ${fetched}, reused ${skipped}, missed ${misses.length} → total indexed ${index.length}`);
console.log(`✓ ${indexPath}`);
if (misses.length) console.log(`  misses: ${misses.slice(0, 15).join(', ')}${misses.length > 15 ? '…' : ''}`);
