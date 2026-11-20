import X from './extra';import i18n from 'i18next';import {initReactI18next} from 'react-i18next';
const ar={brand:'محمد أمين',nav:{home:'الرئيسية',practice:'التخصصات',contact:'تواصل'},
hero:{sub:'المحاماة والاستشارات القانونية',line:'القانون معرفة.. والدفاع مسؤولية',cta1:'احجز استشارة',cta2:'اكتشف تخصصاتنا'},
practice:{title:'مجالات الممارسة',more:'اقرأ المزيد',less:'إغلاق',
items:[['القانون المدني','العقود والتعويضات والمنازعات المدنية وتنفيذ الأحكام.'],['القانون الجنائي','الدفاع أمام الجهات القضائية في القضايا الجنائية.'],['الأحوال الشخصية','قضايا الأسرة والنفقة والحضانة والميراث.'],['القانون التجاري والشركات','تأسيس الشركات والعقود التجارية والمنازعات.'],['القانون العقاري','عقود البيع والتسجيل ومنازعات الملكية والإيجار.'],['مجلس الدولة والقضاء الإداري','الطعون والدعاوى ضد القرارات الإدارية.'],['الخدمات والاستشارات القانونية العامة','استشارات ومراجعة مستندات وصياغة عقود.']]},
contact:{title:'لنبدأ بخطوة قانونية واثقة',name:'الاسم',email:'البريد الإلكتروني',msg:'رسالتك',send:'إرسال',sent:'تم تجهيز رسالتك. سنتواصل معك قريبًا.',eName:'أدخل اسمك (حرفان على الأقل).',eEmail:'أدخل بريدًا إلكترونيًا صحيحًا.',eMsg:'اكتب رسالتك (10 أحرف على الأقل).',wa:'واتساب',phone:'الهاتف',na:'غير متاح حاليًا — أضفه في src/data/site.js'},
loading:'جارٍ التحميل',skip:'تخطي'};
const en={brand:'MOHAMED AMIN',nav:{home:'Home',practice:'Practice',contact:'Contact'},
hero:{sub:'LAW & LEGAL CONSULTANCY',line:'Knowledge of the Law. Responsibility in Defense.',cta1:'Book a Consultation',cta2:'Explore Practice Areas'},
practice:{title:'Practice Areas',more:'Read more',less:'Close',
items:[['Civil Law','Contracts, compensation, civil disputes and enforcement of judgments.'],['Criminal Law','Defense before judicial authorities in criminal matters.'],['Family & Personal Status Law','Family matters, alimony, custody and inheritance.'],['Commercial & Corporate Law','Company formation, commercial contracts and disputes.'],['Real Estate Law','Sale and registration, ownership and tenancy disputes.'],['Administrative Law & State Council','Challenges and claims against administrative decisions.'],['General Legal Services & Consultation','Advice, document review and contract drafting.']]},
contact:{title:'YOUR LEGAL JOURNEY STARTS HERE',name:'Name',email:'Email',msg:'Your message',send:'Send',sent:'Your message is ready. We will be in touch.',eName:'Enter your name (min. 2 characters).',eEmail:'Enter a valid email address.',eMsg:'Write your message (min. 10 characters).',wa:'WhatsApp',phone:'Phone',na:'Not available yet — add it in src/data/site.js'},
loading:'Loading',skip:'Skip'};
i18n.use(initReactI18next).init({resources:{ar:{translation:{...ar,...X.ar}},en:{translation:{...en,...X.en}}},lng:localStorage.getItem('lang')||'ar',fallbackLng:'en',interpolation:{escapeValue:false},returnObjects:true});
export default i18n;
