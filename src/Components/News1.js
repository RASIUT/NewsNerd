import React, { Component } from 'react'
import { NewsItem } from './NewsItem';

export class News extends Component {
	state = {
		// articles: [{
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BBC News"
		// 	},
		// 	"author": null,
		// 	"title": "The rape and murder of a doctor in hospital alarm India",
		// 	"description": "The rape and murder of a female doctor in India highlight the violence against healthcare workers.",
		// 	"url": "https://www.bbc.com/news/articles/c93pqq9r5n4o",
		// 	"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/0b64/live/b9fa9960-589e-11ef-aebc-6de4d31bf5cd.jpg",
		// 	"publishedAt": "2024-08-14T02:11:57Z",
		// 	"content": "Doctors are protesting against the rape and murder of a colleague in a government hospital in Kolkata\r\nEarly on Friday morning, a 31-year-old female trainee doctor retired to sleep in a seminar hall … [+6954 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BBC News"
		// 	},
		// 	"author": null,
		// 	"title": "Tragic shipwreck off Dorset granted special status",
		// 	"description": "The Earl of Abergavenney sank in 1805 with the loss of some 250 lives.",
		// 	"url": "https://www.bbc.com/news/articles/cy0r5nljzv4o",
		// 	"urlToImage": "https://ichef.bbci.co.uk/news/1024/branded_news/4cb4/live/d010af10-59e2-11ef-9753-31dcf97b6cbb.jpg",
		// 	"publishedAt": "2024-08-14T04:09:30Z",
		// 	"content": "Thomas Luny's painting The Earl of Abergavenny\r\nThe wreck of a ship which sank more than 200 years ago has been granted special protection by the government.\r\nThe Earl of Abergavenny sank off the coa… [+1950 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Android Central"
		// 	},
		// 	"author": "harish.jonnalagadda@futurenet.com (Harish Jonnalagadda)",
		// 	"title": "The Pixel 9 and Pixel 9 Pro Fold are now available in India, and you won't believe what they cost",
		// 	"description": "Google's latest Pixels and Pixel 9 Pro Fold have made their debut in India, and they're among the costliest phones in the country.",
		// 	"url": "https://www.androidcentral.com/phones/the-pixel-9-and-pixel-9-pro-fold-are-now-available-in-india-and-you-wont-believe-what-they-cost",
		// 	"urlToImage": "https://cdn.mos.cms.futurecdn.net/2A8sbvw4AtGhGSQqxumdZW-1200-80.jpg",
		// 	"publishedAt": "2024-08-14T04:21:51Z",
		// 	"content": "What you need to know\r\n\u003Cul\u003E\u003Cli\u003EGoogle has launched the Pixel 9, Pixel 9 Pro, and Pixel 9 Pro XL in India.\u003C/li\u003E\u003Cli\u003EThankfully, all three models are available in a single variant with 256GB of storage.… [+3098 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Techmeme.com"
		// 	},
		// 	"author": null,
		// 	"title": "A look at challenges Google faces ahead of Pixel 9 launch in India; IDC: Google's smartphone shipments in India grew over 1,300% in 2023 to a 0.5% market share (Jagmeet Singh/TechCrunch)",
		// 	"description": "Jagmeet Singh / TechCrunch:\nA look at challenges Google faces ahead of Pixel 9 launch in India; IDC: Google's smartphone shipments in India grew over 1,300% in 2023 to a 0.5% market share  —  On Tuesday at its Made by Google event, Google announced that the n…",
		// 	"url": "https://www.techmeme.com/240814/p1",
		// 	"urlToImage": "https://techcrunch.com/wp-content/uploads/2024/08/Pixel9_2.jpeg?resize=1200,900",
		// 	"publishedAt": "2024-08-14T04:55:07Z",
		// 	"content": "About This Page\r\nThis is a Techmeme archive page.\r\nIt shows how the site appeared at 12:55 AM ET, August 14, 2024.\r\nThe most current version of the site as always is available at our home page.\r\nTo v… [+70 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Springwise.com"
		// 	},
		// 	"author": "Matthew Hempstead",
		// 	"title": "Rice projects reduce methane from farming",
		// 	"description": "This company helps rice farmers in India switch to greener growing techniques",
		// 	"url": "https://www.springwise.com/innovation/agriculture-energy/monitoring-sustainable-rice-projects-to-reduce-methane/",
		// 	"urlToImage": "https://www.springwise.com/wp-content/uploads/2024/08/innovationagriculture-energymonitoring-sustainable-rice-projects-to-reduce-methane.jpg",
		// 	"publishedAt": "2024-08-14T07:16:22Z",
		// 	"content": "Spotted: Rice is a staple component of countless cuisines around the world, with over 513 million metric tonnes of the grain produced in the last harvest year. But all that rice comes at a high cost … [+2016 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "GSMArena.com"
		// 	},
		// 	"author": "Michail",
		// 	"title": "Lenovo Legion Y700 (2023) launches in India as the Lenovo Legion Tab 8.8 Gen 2",
		// 	"description": "Lenovo released the Legion Y700 (2023) tablet back in July of last year, and now, more than one year after that, it's finally bringing it to India. Only over there it has a different name: Lenovo Legion Tab 8.8 Gen 2.\n\nOtherwise, it's identical to the Y700 (2…",
		// 	"url": "https://www.gsmarena.com/lenovo_legion_y700_2023_launches_in_india_as_the_lenovo_legion_tab_88_gen_2-news-64108.php",
		// 	"urlToImage": "https://fdn.gsmarena.com/imgroot/news/24/08/lenovo-legion-tab-8-8-gen-2-india/-952x498w6/gsmarena_000.jpg",
		// 	"publishedAt": "2024-08-14T00:23:01Z",
		// 	"content": "Lenovo released the Legion Y700 (2023) tablet back in July of last year, and now, more than one year after that, it's finally bringing it to India. Only over there it has a different name: Lenovo Leg… [+803 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Sky Sports"
		// 	},
		// 	"author": "Amar Mehta and Tejas Kotecha",
		// 	"title": "Premier League promises 'long term' support for British South Asians",
		// 	"description": "The Premier League's South Asian Action Plan is a \"long-term\" objective and clubs are helping to create a pathway for British South Asian youngsters, says director of football Neil Saunders.",
		// 	"url": "https://www.skysports.com/football/news/11661/13196258/premier-league-continues-long-term-support-for-british-south-asians-says-neil-saunders",
		// 	"urlToImage": "https://e0.365dm.com/24/08/1600x900/skysports-football-premier-league_6655166.jpg?20240813100157",
		// 	"publishedAt": "2024-08-14T05:00:00Z",
		// 	"content": "The Premier League's South Asian Action Plan is a \"long-term\" objective and clubs are helping to create a pathway for British South Asian youngsters, says director of football Neil Saunders.\r\nThe Sou… [+6722 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "el-mundo",
		// 	  "name": "El Mundo"
		// 	},
		// 	"author": "AMAYA GARCÍA",
		// 	"title": "El chef canario que vive en chanclas todo el año y triunfa en Es Fum, un estrella Michelin de Mallorca",
		// 	"description": "Miguel Navarro llegó hace ocho años a la isla balear para tomar las riendas del gastronómico del Hotel St. Regis. Su nuevo menú, más allá de una técnica y una calidad sobresalientes, habla del amor, la madurez, la muerte y la amistad. Leer",
		// 	"url": "https://www.elmundo.es/metropoli/gastronomia/2024/08/14/66b4b036e9cf4aa9538b45a9.html",
		// 	"urlToImage": "https://phantom-elmundo.unidadeditorial.es/fce99994f3056d2f8c05daa6c4e8576a/resize/1200/f/webp/assets/multimedia/imagenes/2024/08/08/17231253663509.jpg",
		// 	"publishedAt": "2024-08-14T07:37:39Z",
		// 	"content": "Miguel Navarro (45) llegó hace ocho años a Mallorca. Era la primera visita que realizaba a la isla balear, \"pese a que una de mis abuelas era de aquí\", y allí se quedó. Dice este cocinero que \"un isl… [+6109 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ET Now",
		// 	"title": "Hindalco net debt negative in India; in Q2, EBITDA per tonne to come in a bit lower than in Q1: Satish Pai",
		// 	"description": "Hindalco reported higher-than-expected sales for the quarter, driven by strong demand and operational efficiency. Consolidated EBITDA soared 31% year-on-year to Rs 7,992 crore. MD Satish Pai stated that the company will stick with its Rs 600 crore guidance, f…",
		// 	"url": "https://economictimes.indiatimes.com/markets/expert-view/hindalco-net-debt-negative-in-india-in-q2-ebitda-per-tonne-to-come-in-a-bit-lower-than-in-q1-satish-pai/articleshow/112514580.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112514629,width-1200,height-630,imgsize-20668,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T06:21:39Z",
		// 	"content": "Satish Pai, MD, Hindalco, says this quarter the sales were much higher than expected. The demand was very strong, and operational efficiencies were good. The company got a higher number, but there wa… [+4648 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Forbes"
		// 	},
		// 	"author": "Tristan Lavalette, Contributor, \n Tristan Lavalette, Contributor\n https://www.forbes.com/sites/tristanlavalette/",
		// 	"title": "Cricket Readies For Olympic Return At Los Angeles 2028",
		// 	"description": "Attention turns to LA 2028, where cricket will make its long-awaited Olympic return after much resistance from the sport's most powerful countries",
		// 	"url": "https://www.forbes.com/sites/tristanlavalette/2024/08/13/cricket-readies-for-olympic-return-at-los-angeles-2028/",
		// 	"urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bb576bce29bcc359b50d3f/0x0.jpg?format=jpg&height=900&width=1600&fit=bounds",
		// 	"publishedAt": "2024-08-14T01:13:12Z",
		// 	"content": "Cricket will be at the Los Angeles Olympics (Photo by INDRANIL MUKHERJEE / AFP) (Photo by INDRANIL ... [+] MUKHERJEE/AFP via Getty Images)\r\nAFP via Getty Images\r\nAfter Tom Cruise performed his latest… [+4683 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Forbes"
		// 	},
		// 	"author": "Rajeev Peshawaria, Contributor, \n Rajeev Peshawaria, Contributor\n https://www.forbes.com/sites/rajeevpeshawaria/",
		// 	"title": "Power, Integrity, Ethics. How Big Is Your PIE?",
		// 	"description": "Business leaders have the responsibility and power to solve existential challenges, but they need to lead with ethical integrity.",
		// 	"url": "https://www.forbes.com/sites/rajeevpeshawaria/2024/08/14/power-integrity-ethics-how-big-is-your-pie/",
		// 	"urlToImage": "https://imageio.forbes.com/specials-images/imageserve/66bc4f5f30f030506957b86b/0x0.jpg?format=jpg&crop=2204,1240,x0,y114,safe&height=900&width=1600&fit=bounds",
		// 	"publishedAt": "2024-08-14T06:36:26Z",
		// 	"content": "The Power Problem\r\nWhat have been the two biggest reasons for murder throughout human history?\r\nIf you guessed God and Country, or religion and patriotism, you would be spot on. Not only have we been… [+8033 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Biztoc.com"
		// 	},
		// 	"author": "businessinsider.com",
		// 	"title": "A Tesla fan in India preordered a Model 3 in 2016. He waited 7 years, and the car still hadn't shown up",
		// 	"description": "New Tesla electric vehicles at the retail location in New York.\nNewsday LLC/Getty Images\nVishal Gondal, a Tesla fan from Mumbai, preordered the Model 3 in 2016 but never received it.\nAfter seven years of waiting, he finally sought a deposit refund and purchas…",
		// 	"url": "https://biztoc.com/x/f024fcc90106bc30",
		// 	"urlToImage": "https://biztoc.com/cdn/800/og.png",
		// 	"publishedAt": "2024-08-14T05:56:43Z",
		// 	"content": "New Tesla electric vehicles at the retail location in New York.Newsday LLC/Getty ImagesVishal Gondal, a Tesla fan from Mumbai, preordered the Model 3 in 2016 but never received it.After seven years o… [+139 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Skift"
		// 	},
		// 	"author": "Skift",
		// 	"title": "How the Indian Diaspora Is Supporting India’s Inbound Travel Growth – India Report",
		// 	"description": "Trevolution Group's data on international travel to India highlights the country's growing popularity as a tourist destination. -Bulbul Dhawan",
		// 	"url": "http://skift.com/2024/08/13/how-the-indian-diaspora-is-supporting-indias-inbound-travel-growth-india-report/",
		// 	"urlToImage": "https://skift.com/wp-content/uploads/2024/08/pexels-uwc12-574324.jpg",
		// 	"publishedAt": "2024-08-14T03:00:00Z",
		// 	"content": "India’s travel landscape is evolving rapidly, reflecting the country’s growing economic clout and the increasing confidence of its travelers. The first half of 2024 saw a significant surge in both ou… [+6072 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "nbc-news",
		// 	  "name": "NBC News"
		// 	},
		// 	"author": "Charmaine Jacob, CNBC",
		// 	"title": "India launches app to lower deaths caused by wild elephants",
		// 	"description": "The state of Assam, in northeastern India, has launched a mobile app that warns people of incoming herds of wild elephants in an effort to reduce violent encounters between humans and the land giants.",
		// 	"url": "https://www.nbcnews.com/news/world/india-launches-app-lower-deaths-caused-wild-elephants-rcna166509",
		// 	"urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2024-08/240814-india-elephant-herd-wc-0700-174073.jpg",
		// 	"publishedAt": "2024-08-14T06:10:12Z",
		// 	"content": "The state of Assam, in northeastern India, has launched a mobile app that warns people of incoming herds of wild elephants in an effort to reduce violent encounters between humans and the land giants… [+1815 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Thenewslens.com"
		// 	},
		// 	"author": "中央通訊社",
		// 	"title": "【巴黎奧運】印度全球人口最多卻未能摘金，印媒：難以接受但有收穫",
		// 	"description": "根據《今日印度》統計，這次巴黎奧運中，人口3.3億的美國拿下40金在內的126面獎牌，等於每264萬人就可奪得1面獎牌，獎牌榜排名第2的中國，每1560萬人中就有1人獲得獎牌，獲得20面獎牌的巴西，每1015萬人就能產出1面獎牌，人口5565萬的肯亞獲11面獎牌，等於每444萬人就能拿下一面獎牌。",
		// 	"url": "https://www.thenewslens.com/feature/paris-olympics/206575",
		// 	"urlToImage": "https://image1.thenewslens.com/2024/8/haie5l1t3tj4par9du4jr3bfurdcr0.jpg?fm=jpg&format=crop&h=630&q=70&w=1200",
		// 	"publishedAt": "2024-08-14T02:05:49Z",
		// 	"content": "1\r\n20242069140444212612573515671\r\n146202012472016\r\nIndia Today\r\n3.34012626412156012010151556511444\r\n34718\r\nVinesh Phogat0.1Neeraj ChopraArshad Nadeem9297\r\nTimes of India, TOI\r\nLovlina BorgohainNishan… [+54 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "[Removed]"
		// 	},
		// 	"author": null,
		// 	"title": "[Removed]",
		// 	"description": "[Removed]",
		// 	"url": "https://removed.com",
		// 	"urlToImage": null,
		// 	"publishedAt": "1970-01-01T00:00:00Z",
		// 	"content": "[Removed]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "[Removed]"
		// 	},
		// 	"author": null,
		// 	"title": "[Removed]",
		// 	"description": "[Removed]",
		// 	"url": "https://removed.com",
		// 	"urlToImage": null,
		// 	"publishedAt": "1970-01-01T00:00:00Z",
		// 	"content": "[Removed]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "espn-cric-info",
		// 	  "name": "ESPN Cric Info"
		// 	},
		// 	"author": "ESPNcricinfo staff",
		// 	"title": "Mack's century marshals Australia A to victory in opening one-dayer",
		// 	"description": "Raghvi Bist helped India A recovery from a tricky start to post a decent total in Mackay",
		// 	"url": "https://www.espncricinfo.com/series/australia-a-women-vs-india-a-women-2024-1443790/australia-a-women-vs-india-a-women-1st-match-1443797/match-report",
		// 	"urlToImage": "https://img1.hscicdn.com/image/upload/f_auto/lsci/db/PICTURES/CMS/386100/386103.6.jpg",
		// 	"publishedAt": "2024-08-14T06:37:34Z",
		// 	"content": "Katie Mack took control of the chase  •  Getty Images"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Yahoo Entertainment"
		// 	},
		// 	"author": "Arunabh SAIKIA",
		// 	"title": "India's bad boy pilgrimage for Hindu god of destruction",
		// 	"description": "The Hindu sacred month of Shravan honours the god of destruction Lord Shiva, and in northern India, it has become increasingly associated with mob violence...",
		// 	"url": "https://www.yahoo.com/news/indias-bad-boy-pilgrimage-hindu-014029607.html",
		// 	"urlToImage": "https://media.zenfs.com/en/afp.com/4dc57cd112ab4b94bba10eb3f019cabd",
		// 	"publishedAt": "2024-08-14T01:40:29Z",
		// 	"content": "The Hindu sacred month of Shravan honours the god of destruction Lord Shiva, and in northern India, it has become increasingly associated with mob violence by saffron-clad devotees.\r\nAnalysts say the… [+4626 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Yahoo Entertainment"
		// 	},
		// 	"author": null,
		// 	"title": "Rape and murder of doctor in hospital spark anger in India",
		// 	"description": null,
		// 	"url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_d0135f72-532d-4434-a5be-a3a0b81c05ba",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T07:10:07Z",
		// 	"content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Securityaffairs.com"
		// 	},
		// 	"author": "Pierluigi Paganini",
		// 	"title": "Microsoft Patch Tuesday security updates for August 2024 addressed six actively exploited bugs",
		// 	"description": "Microsoft’s August 2024 Patch Tuesday addressed 90 vulnerabilities, including six that are actively exploited. Patch Tuesday security updates for August 2024 addressed 90 vulnerabilities in Microsoft products including Windows and Windows Components; Office a…",
		// 	"url": "https://securityaffairs.com/167000/security/microsoft-patch-tuesday-august-2024.html",
		// 	"urlToImage": "https://securityaffairs.com/wp-content/uploads/2014/12/Microsoft-Patch-Tuesday-Exchange-server.png",
		// 	"publishedAt": "2024-08-14T07:13:59Z",
		// 	"content": "Microsoft Patch Tuesday security updates for August 2024 addressed six actively exploited bugs\r\n | A PoC exploit code is available for critical Ivanti vTM bug\r\n | Elon Musk claims that a DDoS attack … [+91441 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "rt",
		// 	  "name": "RT"
		// 	},
		// 	"author": "RT",
		// 	"title": "India tests new anti-tank missile system (VIDEO)",
		// 	"description": "New Delhi as been ramping up its capabilities in defence manufacturing for its own military and exports Read Full Article at RT.com",
		// 	"url": "https://www.rt.com/india/602590-india-tests-new-anti-tank-missile-system/",
		// 	"urlToImage": "https://mf.b37mrtl.ru/files/2024.08/article/66bc492b85f540294f0cb193.jpg",
		// 	"publishedAt": "2024-08-14T06:08:21Z",
		// 	"content": "India has successfully test-fired an indigenously made portable anti-tank guided missile. Developed by the Defence Research and Development Organisation (DRDO), the country’s primary agency for devel… [+2691 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "rt",
		// 	  "name": "RT"
		// 	},
		// 	"author": "RT",
		// 	"title": "Thousands of streetlights stolen in Indian holy town",
		// 	"description": "India has spent over $3 billion in Ayodhya, where Prime Minister Narendra Modi inaugurated an iconic Ram temple Read Full Article at RT.com",
		// 	"url": "https://www.rt.com/india/602596-thousands-of-streetlights-stolen-ayodhya/",
		// 	"urlToImage": "https://mf.b37mrtl.ru/files/2024.08/article/66bc626a203027565f210985.jpg",
		// 	"publishedAt": "2024-08-14T08:00:40Z",
		// 	"content": "Thousands of streetlights have been stolen in Ayodhya, a sacred town for Hindus in India’s Uttar Pradesh state, local media reported on Wednesday, citing a police complaint.\r\nA report filed last week… [+1932 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Sarkarinaukriblog.com"
		// 	},
		// 	"author": "noreply@blogger.com (Manisha)",
		// 	"title": "IOCL Non-Executive Vacancy Recruitment 2024",
		// 	"description": "Non-Executive Personnel Vacancy Recruitment in IOCL 2024\nIndian Oil Corporation Limited (IOCL) the largest commercial undertaking in India and a Fortune “Global 500” company requires result-oriented experienced personnel with initiative and enterprise for its…",
		// 	"url": "https://www.sarkarinaukriblog.com/2024/08/iocl-non-executive-vacancy-recruitment.html",
		// 	"urlToImage": "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjl4QzTzoAnmefd1iqvZ1N44Dw4ESLkgxSD7tsOY4S6TaOm7WELvdh9Qrf4oODKOaJsJ1YXWh1vOpJZ9cK7VW3NyOSsw52wOOSj1iazV_Oi7vxVUn6VMLX3qdp7ISGoA7MnehU4/w1200-h630-p-k-no-nu/iocl.webp",
		// 	"publishedAt": "2024-08-14T07:47:00Z",
		// 	"content": "Indian Oil Corporation Limited (IOCL) the largest commercial undertaking in India and a Fortune “Global 500” company requires result-oriented experienced personnel with initiative and enterprise for … [+2281 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Huffingtonpost.es"
		// 	},
		// 	"author": "Redacción HuffPost / Agencias",
		// 	"title": "Los supercazas españoles vuelven a casa tras lucirse en la misión internacional de 58.000 kilómetros",
		// 	"description": "\u003C![CDATA[\u003Cp\u003ELa base aérea de Morón de la Frontera (Sevilla), utilizada tanto por España como por Estados Unidos y que se encuentra en el término municipal de Arahal, recibirá este jueves, 15 de agosto, el retorno de las aeronaves y personal del Ejército del A…",
		// 	"url": "https://www.huffingtonpost.es/global/los-supercazas-espanoles-vuelven-casa-lucirse-mision-internacional-58000-kilometros.html",
		// 	"urlToImage": "https://img.huffingtonpost.es/files/og_thumbnail/uploads/2024/08/11/spanish-air-force-fighter-eurofighter-typhoon.jpeg",
		// 	"publishedAt": "2024-08-14T05:00:00Z",
		// 	"content": "La base aérea de Morón de la Frontera (Sevilla), utilizada tanto por España como por Estados Unidos y que se encuentra en el término municipal de Arahal, recibirá este jueves, 15 de agosto, el retorn… [+1570 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "abc-news-au",
		// 	  "name": "ABC News (AU)"
		// 	},
		// 	"author": "Michael Workman and Kevin Nguyen",
		// 	"title": "Facebook is about to kill the tool we used to expose Africa-based trolls targeting the UK race riots",
		// 	"description": "ABC NEWS Verify used a Meta-owned tool called CrowdTangle to help up-end a disinformation operation on Facebook that was targeting the UK race riots. Now, after years of it bringing the company public humiliation, Meta is killing off CrowdTangle for good.",
		// 	"url": "https://www.abc.net.au/news/2024-08-14/meta-shuts-crowdtangle-as-disinformation-ai-runs-rampant/104214782",
		// 	"urlToImage": "https://live-production.wcms.abc-cdn.net.au/f41a6b4596ae19f4d7a1095c9415b670?impolicy=wcms_watermark_news&cropH=719&cropW=1279&xPos=0&yPos=97&width=862&height=485&imformat=generic",
		// 	"publishedAt": "2024-08-14T02:12:19Z",
		// 	"content": "A week before race riots broke out across England and Northern Ireland, entrepreneurial trolls operating from Africa launched a Facebook page called \"Patriots of Britain\".\r\nThey started publishing an… [+11373 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "International Business Times"
		// 	},
		// 	"author": "Aishwarya KUMAR",
		// 	"title": "Climate Change Fuelled Deadly India Landslides, Say Scientists",
		// 	"description": "Climate change played a key factor in torrential rains in India that triggered catastrophic landslides killing at least 200 people last month, a group of scientists said Wednesday.",
		// 	"url": "https://www.ibtimes.com/climate-change-fuelled-deadly-india-landslides-say-scientists-3739748",
		// 	"urlToImage": "https://d.ibtimes.com/en/full/4541714/rescuers-retrieve-body-one-more-200-people-killed-landslides-triggered-intense-rains.jpg",
		// 	"publishedAt": "2024-08-14T07:21:20Z",
		// 	"content": "Climate change played a key factor in torrential rains in India that triggered catastrophic landslides killing at least 200 people last month, a group of scientists said Wednesday.\r\nMonsoon rains bat… [+2258 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "International Business Times"
		// 	},
		// 	"author": "Arunabh SAIKIA",
		// 	"title": "India's Bad Boy Pilgrimage For Hindu God Of Destruction",
		// 	"description": "The Hindu sacred month of Shravan honours the god of destruction Lord Shiva, and in northern India, it has become increasingly associated with mob violence by saffron-clad devotees.",
		// 	"url": "https://www.ibtimes.com/indias-bad-boy-pilgrimage-hindu-god-destruction-3739712",
		// 	"urlToImage": "https://d.ibtimes.com/en/full/4541630/hindu-sacred-month-shravan-honouring-lord-shiva-god-destruction-has-become-increasingly.jpg",
		// 	"publishedAt": "2024-08-14T01:48:18Z",
		// 	"content": "The Hindu sacred month of Shravan honours the god of destruction Lord Shiva, and in northern India, it has become increasingly associated with mob violence by saffron-clad devotees.\r\nAnalysts say the… [+4524 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "International Business Times"
		// 	},
		// 	"author": "AFP News",
		// 	"title": "Ousted Bangladesh PM Urges Supporters To Make Public Show Of Strength",
		// 	"description": "Ousted Bangladeshi premier Sheikh Hasina on Tuesday asked supporters to make a public show of strength later this week, hours after a court ruled that a murder probe against her linked to last month's unrest could proceed.",
		// 	"url": "https://www.ibtimes.com/ousted-bangladesh-pm-urges-supporters-make-public-show-strength-3739724",
		// 	"urlToImage": "https://d.ibtimes.com/en/full/4541531/students-chant-slogans-they-demand-bangladeshs-ousted-prime-minister-sheikh-hasina-face-trial.jpg",
		// 	"publishedAt": "2024-08-14T03:45:34Z",
		// 	"content": "Ousted Bangladeshi premier Sheikh Hasina on Tuesday asked supporters to make a public show of strength later this week, hours after a court ruled that a murder probe against her linked to last month'… [+4323 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Exler.ru"
		// 	},
		// 	"author": "Алексей Экслер",
		// 	"title": "Молоко - расистский продукт?",
		// 	"description": "В Индии, как пишет The Times Of India, на деньги налогоплательщиков создали большой исследовательский проект, в котром учеными из различных университетов изучался вопрос, является ли молоко расистским, и то, как на индийцев повлияло употребление молока.\r\n\r\nПо…",
		// 	"url": "https://exler.ru/blog/moloko-rasistskiy-produkt.htm",
		// 	"urlToImage": "https://exler.ru/s/400/blog/image/20240814/66bc5e212864d.webp",
		// 	"publishedAt": "2024-08-14T07:34:00Z",
		// 	"content": ", The Times Of India, , , , , .\r\n , . .\r\n, , , , , , , , , . , (, , ) .\r\n , . . , , , , , .\r\n, . , , ."
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Human Rights Watch"
		// 	},
		// 	"author": "Human Rights Watch",
		// 	"title": "India: Hate Speech Fueled Modi’s Election Campaign",
		// 	"description": "Click to expand Image\n \n\n\n\n \n \n \n\n \n \n \n \n Indian Prime Minister Narendra Modi speaks at a public rally ahead of polling in the national election in Hyderabad, India, May 10, 2024.\n © 2024 Mahesh Kumar A./AP Photo\n \n \n\n\n \nIndian Prime Minister Narendra Modi’s…",
		// 	"url": "https://www.hrw.org/news/2024/08/14/india-hate-speech-fueled-modis-election-campaign",
		// 	"urlToImage": "https://www.hrw.org/sites/default/files/styles/opengraph/public/media_2024/08/202408asia_india_modi.jpg?h=955717ed&itok=DDDetXiD",
		// 	"publishedAt": "2024-08-14T04:00:00Z",
		// 	"content": "\u003Cul\u003E\u003Cli\u003EIndian Prime Minister Narendra Modis 2024 electoral campaign frequently used hate speech against Muslims and other minorities, inciting discrimination, hostility, and violence.\u003C/li\u003E\u003Cli\u003EInflam… [+21159 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Chinadigitaltimes.net"
		// 	},
		// 	"author": "Arthur Kaufman",
		// 	"title": "China Expands Tactics to Bolster Territorial Claims, Rivals Follow Suit",
		// 	"description": "While territorial disputes have long played a role in Chinese economic and foreign policy, China’s growing resources have allowed it to adopt more ambitious and expansive tactics in asserting its territorial claims. However, as several recent news articles il…",
		// 	"url": "https://chinadigitaltimes.net/2024/08/china-expands-tactics-to-bolster-territorial-claims-rivals-follow-suit/",
		// 	"urlToImage": "https://chinadigitaltimes.net/wp-content/uploads/2021/08/CDT-logo.png",
		// 	"publishedAt": "2024-08-14T04:32:58Z",
		// 	"content": "While territorial disputes have long played a role in Chinese economic and foreign policy, Chinas growing resources have allowed it to adopt more ambitious and expansive tactics in asserting its terr… [+10877 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Mediafax.ro"
		// 	},
		// 	"author": "Mediafax",
		// 	"title": "Violul şi uciderea unui medic într-un spital din India declanşează proteste în toată ţara",
		// 	"description": "O doctoriţă stagiară a fost violată şi ucisă într-un spital din India, declanşând proteste în toată ţara pentru protejarea lucrătorilor din domeniul sănătăţii împotriva violenţei.",
		// 	"url": "https://www.mediafax.ro/stiinta-sanatate/violul-si-uciderea-unui-medic-intr-un-spital-din-india-declanseaza-proteste-in-toata-tara-22460974",
		// 	"urlToImage": "https://storage0.dms.mpinteractiv.ro/media/1/1/7627/22460974/1/pexels-pixabay-236380.jpg?width=640",
		// 	"publishedAt": "2024-08-14T07:04:26Z",
		// 	"content": "O doctori stagiar a fost violat i ucis într-un spital din India, declanând proteste în toat ara pentru protejarea lucrtorilor din domeniul sntii împotriva violenei. Doctoria stagiar în vârst de 31 de… [+1638 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Bangkok Post"
		// 	},
		// 	"author": "South China Morning Post and agencies",
		// 	"title": "Worshippers throng 'visa temple' in India to pray for successful path to US",
		// 	"description": "\u003Cp\u003EHYDERABAD - Indian devotees believe the \u003Cstrong\u003EChilkur Balaji temple\u003C/strong\u003E in the southern city of \u003Cstrong\u003EHyderabad\u003C/strong\u003E has been particularly effective in blessing people with a successful US visa application, so much so that it is locally known …",
		// 	"url": "https://www.bangkokpost.com/world/2847056/hindu-worshippers-in-india-throng-visa-temple-to-pray-for-successful-path-to-the-united-states",
		// 	"urlToImage": "https://static.bangkokpost.com/media/content/20240814/c1_2847056_700.jpg",
		// 	"publishedAt": "2024-08-14T07:12:00Z",
		// 	"content": "HYDERABAD - Indian devotees believe the Chilkur Balaji temple in the southern city of Hyderabad has been particularly effective in blessing people with a successful US visa application, so much so th… [+997 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Adevarul.ro"
		// 	},
		// 	"author": "Cornelia Mazilu",
		// 	"title": "Creștere alarmantă a problemelor de sănătate mintală în rândul tinerilor. Experți: E nevoie urgentă de stoparea deceselor premature",
		// 	"description": "Specialiștii avertizează că există o creștere „alarmantă” a problemelor de sănătate mintală în rândul tinerilor în fața unor provocări „fără precedent”. Locurile de muncă nesigure, criza climatică și rețelele de socializare conduc la un declin „periculos”, po…",
		// 	"url": "https://adevarul.ro/stil-de-viata/viata-sanatoasa/crestere-alarmanta-a-problemelor-de-sanatate-2381602.html",
		// 	"urlToImage": "https://cdn.adh.reperio.news/image-5/5bef9539-e10a-4f95-b439-a529925e58a0/index.jpeg?p=f%3Djpeg%26w%3D1200%26h%3D630%26r%3Dcover",
		// 	"publishedAt": "2024-08-14T06:07:02Z",
		// 	"content": "Specialitii avertizeaz c exist o cretere alarmant a problemelor de sntate mintal în rândul tinerilor în faa unor provocri fr precedent. Locurile de munc nesigure, criza climatic i reelele de socializ… [+4131 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Livemint"
		// 	},
		// 	"author": "Livemint",
		// 	"title": "Drone buzz: India must buckle up for today’s AI-equipped arms race",
		// 	"description": "As US-China rivalry heats up to propel both Cold War II archrivals ahead, sneaky drones and hypersonic missiles are blazing trails we cannot ignore. To defend India’s strategic autonomy in the digital age of warfare, our weaponry must keep up—sensibly.",
		// 	"url": "https://www.livemint.com/opinion/online-views/drones-india-defence-technology-missiles-hypersonic-glide-vehicles-cold-war-2-ai-us-china-rivalry-houthis-ukraine-war-11723570343453.html",
		// 	"urlToImage": "https://www.livemint.com/lm-img/img/2024/08/13/1600x900/PTI23-09-2020_000122B_1601560485738_1601560497163_1723578429582.jpg",
		// 	"publishedAt": "2024-08-14T03:00:10Z",
		// 	"content": "Innocuous news from China shouldnt make anyone sit up, but any technological edge it gains over the West in the Cold War II thats underway should. On Sunday, China test-flew a large unmanned aircraft… [+3401 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Livemint"
		// 	},
		// 	"author": "Bibek Debroy",
		// 	"title": "Freedom and linguistic identity: Is Bangladesh losing its anchor?",
		// 	"description": "For the nostalgic generation which witnessed the nation’s freedom in 1971, Bangladesh has been moving away and will move further from its Bengali identity. Its dalliance with theocratic politics will impact India, but it’s reassuring that we’ve done well to s…",
		// 	"url": "https://www.livemint.com/opinion/online-views/bangladesh-1971-war-indo-pak-war-east-pakistan-bengali-language-democracy-freedom-struggle-politics-11723570561249.html",
		// 	"urlToImage": "https://www.livemint.com/lm-img/img/2024/08/13/1600x900/2-0-449029645-000-ARP2774739-RR-0_1680893296100_1723579274653.jpg",
		// 	"publishedAt": "2024-08-14T05:00:13Z",
		// 	"content": "Indias 1971 war with Pakistan lasted from 3 December to 16 December. Before that, there was a crackdown on East Pakistan (by Pakistan) on 25 March 1971. (Most people will have read The Blood Telegram… [+5071 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Livemint"
		// 	},
		// 	"author": "Mint SnapView",
		// 	"title": "Google antitrust ruling: Why the US government wants to rein in Big Tech",
		// 	"description": "The ruling against Google is expected to have repercussions for the US government’s lawsuits against other tech giants such as Apple and Amazon. But why is the government going after Big Tech in the first place?",
		// 	"url": "https://www.livemint.com/opinion/online-views/google-monopoly-big-tech-antitrust-ruling-google-antitrust-us-antitrust-google-search-11723615107548.html",
		// 	"urlToImage": "https://www.livemint.com/lm-img/img/2024/08/14/1600x900/US-GOOGLE-LAUNCHES-NEW-PRODUCTS-AT--MADE-BY-GOOGLE_1723615563278_1723615565055.jpg",
		// 	"publishedAt": "2024-08-14T06:22:52Z",
		// 	"content": "Google is a monopolist, and has acted illegally to maintain a monopoly in online search, a US court said in a landmark antitrust ruling last week.\r\nUsers of Google may wonder what the big deal is sin… [+3434 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Livemint"
		// 	},
		// 	"author": "Rahul Jacob",
		// 	"title": "Riots in the UK make a case for social media supervision",
		// 	"description": "While multiculturalism isn’t a lost cause in Britain, the incendiary role of posts on social media platforms like X in spewing hatred and spreading fake news is hard to overlook. Governments should police and prosecute hate speech.",
		// 	"url": "https://www.livemint.com/opinion/online-views/x-violence-in-the-uk-social-media-regulation-multiculturalism-fake-news-hate-speech-cultural-diversity-immigration-11723570757397.html",
		// 	"urlToImage": "https://www.livemint.com/lm-img/img/2024/08/13/1600x900/TOPSHOT-BRITAIN-CRIME-POLICE-UNREST-1_1722789913207_1723579837848.jpg",
		// 	"publishedAt": "2024-08-14T07:00:15Z",
		// 	"content": "The UKs image as a multicultural country is the obvious loser from the far-right violence of the past fortnight, but in time these tragic events may have wider implications for the policing of social… [+5298 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Rlsbb.cc"
		// 	},
		// 	"author": "saamaan1@yahoo.com (Master), Master",
		// 	"title": "Freddie Flintoffs Field Of Dreams S02E01 1080p HDTV H264-DARKFLiX",
		// 	"description": "Season 2, Episode 01 – Sporting legend Freddie faces his toughest challenge yet, taking his team of unlikely lads from Lancashire to India on the most unlikely cricket tour that almost didn’t happen. Links: HOMEPAGE – TVDBFreddie.Flintoffs.Field.Of.Dreams.S02…",
		// 	"url": "https://rlsbb.cc/freddie-flintoffs-field-of-dreams-s02e01-1080p-hdtv-h264-darkflix/",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T02:47:54Z",
		// 	"content": "Season 2, Episode 01 Sporting legend Freddie faces his toughest challenge yet, taking his team of unlikely lads from Lancashire to India on the most unlikely cricket tour that almost didnt happen.\r\nL… [+466 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Yugatech.com"
		// 	},
		// 	"author": "JM Chavaria",
		// 	"title": "OPPO A80 5G quietly unveiled",
		// 	"description": "Oppo has silently unveiled the OPPO A80 5G in the Netherlands. This model appears to be another variant of the OPPO A3 Pro 5G...\nThe post OPPO A80 5G quietly unveiled appeared first on YugaTech | Philippines Tech News & Reviews.",
		// 	"url": "https://www.yugatech.com/news/oppo-a80-5g-quietly-unveiled/",
		// 	"urlToImage": "https://www.yugatech.com/wp-content/uploads/2024/08/oppo-A80-5G-FI.jpg",
		// 	"publishedAt": "2024-08-14T06:10:15Z",
		// 	"content": "Oppo has silently unveiled the OPPO A80 5G in the Netherlands. This model appears to be another variant of the OPPO A3 Pro 5G that has been launched in India two months ago.\r\nThe spec sheet as well a… [+1024 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Greatbong.net"
		// 	},
		// 	"author": "greatbong",
		// 	"title": "On What Is Happening in Bangladesh",
		// 	"description": "As a connoisseur of cringe, I have, over the years, kept a watchful eye on the Bangladeshi film industry: be it buxom dames charging at hanging tomatoes to the tune of “My youth is like a red tomato, squeeze it and bring out the juice, but a few days later” o…",
		// 	"url": "https://greatbong.net/2024/08/14/on-what-is-happening-in-bangladesh/",
		// 	"urlToImage": "https://greatbong.net/wp-content/uploads/2024/08/image1-1.jpeg",
		// 	"publishedAt": "2024-08-14T06:10:32Z",
		// 	"content": "As a connoisseur of cringe, I have, over the years, kept a watchful eye on the Bangladeshi film industry: be it buxom dames charging at hanging tomatoes to the tune of “My youth is like a red tomato,… [+6680 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Globalsecurity.org"
		// 	},
		// 	"author": "John Pike",
		// 	"title": "14th meeting of the India-Australia Joint Working Group on Counter- Terrorism",
		// 	"description": "The 14th meeting of the India-Australia Joint Working Group on Counter- Terrorism was held on 12 August 2024 in New Delhi.",
		// 	"url": "https://www.globalsecurity.org/security/library/news/2024/08/sec-240813-india-mea01.htm",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T02:46:35Z",
		// 	"content": "India - Ministry of External Affairs\r\nAugust 13, 2024\r\nThe 14th meeting of the India-Australia Joint Working Group on Counter- Terrorism was held on 12 August 2024 in New Delhi. Shri K.D. Dewal, Join… [+1572 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Globalsecurity.org"
		// 	},
		// 	"author": "John Pike",
		// 	"title": "Pacific Fleet ship detachment enters Strait of Malacca",
		// 	"description": "No description",
		// 	"url": "https://www.globalsecurity.org/wmd/library/news/russia/2024/08/russia-240813-russia-mod01.htm",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T08:04:24Z",
		// 	"content": "13.08.2024\r\nThe Pacific Fleet ship detachment comprising the Guards Order of Nakhimov missile cruise Varyag and frigate Marshal Shaposhnikov entered the Strait of Malacca.\r\nBefore that, the ship deta… [+1222 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Globalsecurity.org"
		// 	},
		// 	"author": "John Pike",
		// 	"title": "DRDO carries out successful maiden flight test of Long Range Glide Bomb 'GAURAV' from Su-30 MK-I platform off Odisha coast",
		// 	"description": "Defence Research and Development Organisation (DRDO) has carried out successful maiden flight test of Long Range Glide Bomb (LRGB), GAURAV from Su-30 MK-I platform of the Indian Air Force (IAF)",
		// 	"url": "https://www.globalsecurity.org/wmd/library/news/india/2024/india-240813-india-pib01.htm",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T02:23:26Z",
		// 	"content": "India - Press Information Bureau\r\nMinistry of Defence\r\nPosted On: 13 AUG 2024 8:20PM by PIB Delhi\r\nDefence Research and Development Organisation (DRDO) has carried out successful maiden flight test o… [+1503 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Globalsecurity.org"
		// 	},
		// 	"author": "John Pike",
		// 	"title": "ARMY 2024 IMTF focuses on special military operation",
		// 	"description": "No description",
		// 	"url": "https://www.globalsecurity.org/wmd/library/news/russia/2024/08/russia-240813-russia-mod09.htm",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T08:04:24Z",
		// 	"content": "13.08.2024\r\nToday, on 13 August 2024, Lieutenant General Aleksandr Osadchuk, Head of the Main Directorate for Innovative Development of the Ministry of Defence of Russia, briefed journalists on the A… [+5084 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Tass.ru"
		// 	},
		// 	"author": "ТАСС",
		// 	"title": "СМИ: Индия ускорила переговоры с США о закупке беспилотников MQ-9B",
		// 	"description": "По данным газеты The Times of India, страна стремится к скорейшему завершению переговоров в связи с ростом угрозы ее безопасности из-за увеличения поставок китайских БПЛА Caihong-4 Пакистану",
		// 	"url": "https://tass.ru/mezhdunarodnaya-panorama/21600739",
		// 	"urlToImage": "https://cdn-storage-media.tass.ru/thumb/ru/mezhdunarodnaya-panorama/21600739?u=2024-08-14T08:07:51.624585",
		// 	"publishedAt": "2024-08-14T08:07:51Z",
		// 	"content": "-, 14 . //. 31 () MQ-9B . The Times of India .\r\n\" - . \", - .\r\n , - Caihong-4 , .\r\n MQ-9B $3,99 . General Atomics , The Times of India.\r\n MQ-9B Sky Guardian Aircraft $3,99 , . 31 MQ-9B Sky Guardian Ai… [+78 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "MediaNama.com"
		// 	},
		// 	"author": "Sharveya Parasnis",
		// 	"title": "Supreme Court Using AI To Translate Judgements: Govt",
		// 	"description": "As of August 5, 2024, more than 36,000 Supreme Court judgments have been translated into Hindi and 17,142 into 16 other regional languages, the Law Minister Shared in the Parliament.\nThe post Supreme Court Using AI To Translate Judgements: Govt appeared first…",
		// 	"url": "https://www.medianama.com/2024/08/223-supreme-court-using-ai-to-translate-judgements-govt/",
		// 	"urlToImage": "https://www.medianama.com/wp-content/uploads/2020/04/Image-from-iOS.jpg-scaled-1.jpg",
		// 	"publishedAt": "2024-08-14T05:14:31Z",
		// 	"content": "The Supreme Court (SC) of India has been using Artificial Intelligence (AI) since February 2023 to translate judicial documents, conduct legal research, automate processes and transcribe oral argumen… [+2095 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "MediaNama.com"
		// 	},
		// 	"author": "Vallari Sanzgiri",
		// 	"title": "Telangana: EV Start-Ups Accused of Violating Safety Norms, Gig Workers Seek Government Action",
		// 	"description": "Gig workers accused company’s of violating government mandates on the weight, speed and motor power of an electric vehicle\nThe post Telangana: EV Start-Ups Accused of Violating Safety Norms, Gig Workers Seek Government Action appeared first on MEDIANAMA.",
		// 	"url": "https://www.medianama.com/2024/08/223-telangana-gig-workers-accuse-ev-startups-safety-violation/",
		// 	"urlToImage": "https://www.medianama.com/wp-content/uploads/2022/05/ranurte-u4r81oZt7qg-unsplash-e1652773266815.jpg",
		// 	"publishedAt": "2024-08-14T06:32:51Z",
		// 	"content": "What’s the news: Alleging that Electric Vehicle (EV) renting start-ups are violating provisions of the Central Motor Vehicles Rules (CMVR), Telanganas gig worker union wrote the State Government for … [+3048 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "The Punch"
		// 	},
		// 	"author": "Our Reporters",
		// 	"title": "N4.2tn MoUs signed with foreign countries under Tinubu – Report",
		// 	"description": "The Nigerian Government has signed no fewer than 26 Memoranda of Understanding with foreign countries and agencies in the last 12 months. The MoUs are in the areas of infrastructure, education, trade and investment, tourism, security, Information/Technology, …",
		// 	"url": "https://punchng.com/n4-2tn-mous-signed-with-foreign-countries-under-tinubu-report/",
		// 	"urlToImage": "https://cdn.punchng.com/wp-content/uploads/2024/05/01134403/57b3a7d5-3b56-43f1-be8e-458ab93425bb.jpg",
		// 	"publishedAt": "2024-08-14T00:05:02Z",
		// 	"content": "The Nigerian Government has signed no fewer than 26 Memoranda of Understanding with foreign countries and agencies in the last 12 months.\r\nThe MoUs are in the areas of infrastructure, education, trad… [+8187 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "The-sun.com"
		// 	},
		// 	"author": "the us sun",
		// 	"title": "Portuguese beaches introducing new 'anti-tourist' rules...",
		// 	"description": "A POPULAR hot spot near a famous beach in Portugal has introduced new rules for tourists. One of Portugal’s most Insta-famous spots, the stunning Benagil Caves, has just slapped down a strict…",
		// 	"url": "https://www.the-sun.com/travel/12191134/much-loved-attraction-portugal-beach-new-rules-tourists/",
		// 	"urlToImage": "https://www.the-sun.com/wp-content/uploads/sites/6/2024/08/newspress-collage-ws695350v-1723586630226.jpg?1723572466&strip=all&quality=100&w=1920&h=1080&crop=1",
		// 	"publishedAt": "2024-08-14T03:00:07Z",
		// 	"content": "A POPULAR hot spot near a famous beach in Portugal has introduced new rules for tourists.\r\nOne of Portugal's most Insta-famous spots, the stunning Benagil Caves, has just slapped down a strict new se… [+4996 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Yahoo Entertainment"
		// 	},
		// 	"author": "BBC",
		// 	"title": "The rape and murder of a doctor in hospital alarm India",
		// 	"description": "The rape and murder of a female doctor in India highlight the violence against healthcare workers.",
		// 	"url": "https://consent.yahoo.com/v2/collectConsent?sessionId=1_cc-session_91dea904-1999-4a87-8dea-99be38ede129",
		// 	"urlToImage": null,
		// 	"publishedAt": "2024-08-14T06:20:51Z",
		// 	"content": "If you click 'Accept all', we and our partners, including 237 who are part of the IAB Transparency &amp; Consent Framework, will also store and/or access information on a device (in other words, use … [+678 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Yahoo Entertainment"
		// 	},
		// 	"author": "Associated Press",
		// 	"title": "AP PHOTOS: Indian soldiers drill for counterinsurgency amid rise in rebel attacks in Kashmir",
		// 	"description": "In the remote Himalayas, tens of thousands of Indian soldiers maintain a tight vigil along the highly militarized Line of Control that divides Kashmir region between India and Pakistan. The terrain is tough and the weather is harsh as the soldiers go through …",
		// 	"url": "https://www.yahoo.com/news/ap-photos-indian-soldiers-drill-063414849.html",
		// 	"urlToImage": "https://s.yimg.com/ny/api/res/1.2/xzgpnAqgo53PkSLFxbkGYQ--/YXBwaWQ9aGlnaGxhbmRlcjt3PTEyMDA7aD04MDA-/https://media.zenfs.com/en/ap.org/a9c06224bcf815b5bc49f48754fa7729",
		// 	"publishedAt": "2024-08-14T06:34:14Z",
		// 	"content": "NOWSHERA, India (AP) In the remote Himalayas, tens of thousands of Indian soldiers maintain a tight vigil along the highly militarized Line of Control that divides Kashmir region between India and Pa… [+1879 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Haber7.com"
		// 	},
		// 	"author": "Zeynep Gül",
		// 	"title": "Orta Doğu'da savaş ihtimali nedeniyle birçok hava yolu uçuşlarını askıya aldı",
		// 	"description": "Hava yolu şirketlerinden bazıları gidiş-dönüş tüm uçuşlarını iptal ederken, bazıları da yeni rotalar oluşturdu.",
		// 	"url": "https://www.haber7.com/dunya/haber/3450727-orta-doguda-savas-ihtimali-nedeniyle-bircok-hava-yolu-ucuslarini-askiya-aldi",
		// 	"urlToImage": "https://i12.haber7.net//haber/haber7/og_image/2024/33/orta_doguda_savas_ihtimali_nedeniyle_bircok_hava_yolu_ucuslarini_askiya_aldi_1723618153_9016.jpg",
		// 	"publishedAt": "2024-08-14T06:49:00Z",
		// 	"content": "Hava yolu irketlerinden bazlar gidi-dönü tüm uçularn iptal ederken, bazlar da yeni rotalar oluturdu.\r\nsrail ile Hamas arasndaki savaa ran'n müdahil olmas ve misilleme yaplmas beklentisi, birçok hava … [+3349 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "The Punch"
		// 	},
		// 	"author": "Punch Editorial Board",
		// 	"title": "Living in a troubled world",
		// 	"description": "THE world is in turmoil today, and in W.B. Yeats’s words, things have fallen apart; the centre cannot hold; mere anarchy is loosed upon the world. Peace has been truncated in Kenya, Nigeria, the UK, Bangladesh, and Venezuela, among others, with deaths, injuri…",
		// 	"url": "https://punchng.com/living-in-a-troubled-world/",
		// 	"urlToImage": "https://cdn.punchng.com/wp-content/uploads/2023/04/23011706/sudan-conflict.jpg",
		// 	"publishedAt": "2024-08-14T00:20:31Z",
		// 	"content": "THE world is in turmoil today, and in W.B. Yeatss words, things have fallen apart; the centre cannot hold; mere anarchy is loosed upon the world. Peace has been truncated in Kenya, Nigeria, the UK, B… [+7841 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Libertaddigital.com"
		// 	},
		// 	"author": "Gonzalo Valero",
		// 	"title": "Bangladesh en llamas: cómo los estudiantes derribaron una dictadura de 15 años",
		// 	"description": "Bangladesh arde tras 50 días de revueltas que derrumbaron un régimen de 15 años, dejando al país al borde del caos e incertidumbre.",
		// 	"url": "https://www.libertaddigital.com/internacional/mundo/2024-08-14/bangladesh-en-llamas-como-los-estudiantes-derribaron-una-dictadura-de-15-anos-7154919/",
		// 	"urlToImage": "https://s.libertaddigital.com/2024/08/12/1200/627/908x580/ld/europapress-6092748-16-july-2024-bangladesh-dhaka-an-injured-person-is-assisted-as-quota.jpg",
		// 	"publishedAt": "2024-08-14T04:39:23Z",
		// 	"content": "En pleno y sofocante mes de julio, Bangladesh ha sufrido un levantamiento que amenaza con cambiar el curso de su historia. Lo que comenzó como una protesta estudiantil contra un controvertido sistema… [+5848 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Digi24.ro"
		// 	},
		// 	"author": "Raul Nețoiu",
		// 	"title": "Rusia va face comerț ca în vremurile antice, după ce 80% dintre tranzacțiile bancare cu China au fost refuzate din cauza sancțiunilor",
		// 	"description": "Rusia și China plănuiesc să readucă la viață vechiul sistem al trocului pentru a ocoli sancțiunile impuse de statele occidentale, după ce în jur de 80% din transferurile bancare în yuani dintre cele două țări au ajuns să fie refuzate, raportează Reuters.",
		// 	"url": "https://www.digi24.ro/stiri/externe/rusia-va-face-comert-ca-in-vremurile-antice-dupa-ce-80-dintre-tranzactiile-bancare-cu-china-au-fost-refuzate-din-cauza-sanctiunilor-2893633",
		// 	"urlToImage": "https://s.iw.ro/gateway/g/ZmlsZVNvdXJjZT1odHRwJTNBJTJGJTJG/c3RvcmFnZTA4dHJhbnNjb2Rlci5yY3Mt/cmRzLnJvJTJGc3RvcmFnZSUyRjIwMjQl/MkYwOCUyRjEzJTJGMjA0NzkwNF8yMDQ3/OTA0X1ZsYWRpbWlyLXB1dGluLXhpLWpp/bnBpbmcuanBnJnc9MTIwMCZoPTYzMCZ6/Yz0xJmhhc2g9M2VhNDRhN2M0NmMwZTM5ZmM2MjhkNjFiNDFhMThjNGE=.thumb.jpg",
		// 	"publishedAt": "2024-08-14T04:00:15Z",
		// 	"content": "Rusia i China plnuiesc s readuc la via vechiul sistem al trocului pentru a ocoli sanciunile impuse de statele occidentale, dup ce în jur de 80% din transferurile bancare în yuani dintre cele dou ri a… [+3412 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "abc-news",
		// 	  "name": "ABC News"
		// 	},
		// 	"author": "CHANNI ANAND Associated Press",
		// 	"title": "AP PHOTOS: Indian soldiers drill for counterinsurgency amid rise in rebel attacks in Kashmir",
		// 	"description": "In the remote Himalayas, tens of thousands of Indian soldiers maintain a tight vigil along the highly militarized Line of Control that divides Kashmir region between India and Pakistan. The terrain is tough and the weather is harsh as the soldiers go through …",
		// 	"url": "https://abcnews.go.com/International/wireStory/ap-photos-indian-soldiers-drill-counterinsurgency-amid-rise-112823531",
		// 	"urlToImage": "https://i.abcnewsfe.com/a/9994e12a-c353-4754-88da-39f635457ed3/wirestory_ea15b8f626adfd6c28d3defa86015119_16x9.jpg?w=1600",
		// 	"publishedAt": "2024-08-14T06:46:30Z",
		// 	"content": "NOWSHERA, India -- In the remote Himalayas, tens of thousands of Indian soldiers maintain a tight vigil along the highly militarized Line of Control that divides Kashmir region between India and Paki… [+1877 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "abc-news",
		// 	  "name": "ABC News"
		// 	},
		// 	"author": "KRUTIKA PATHI Associated Press, SHONAL GANGULY Associated Press",
		// 	"title": "Students who ousted Hasina are helping lead Bangladesh, from the streets to the ministries",
		// 	"description": "Within a week of unseating Bangladesh’s longest-serving prime minister, the students who drove out former Prime Minister Sheikh Hasina were directing Dhaka’s traffic",
		// 	"url": "https://abcnews.go.com/International/wireStory/students-ousted-hasina-helping-lead-bangladesh-streets-ministries-112822438",
		// 	"urlToImage": "https://i.abcnewsfe.com/a/a63e978d-5653-49ad-a712-45c40999a899/wirestory_7ff5ea5cda8afa7883bc2e852e5d7849_16x9.jpg?w=1600",
		// 	"publishedAt": "2024-08-14T04:22:49Z",
		// 	"content": "DHAKA, Bangladesh -- Within a week of unseating Bangladeshs longest-serving prime minister, the students who drove out Sheikh Hasina were directing Dhakas traffic.\r\nDecked out in neon vests, their un… [+6285 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "Subramani Ra Mancombu",
		// 	"title": "India’s role as key supplier in global grains market has shrunk, says USDA",
		// 	"description": "India's grain exports decline due to strong domestic demand, government policies, and global market shifts, impacting trade outlook.",
		// 	"url": "https://www.thehindubusinessline.com/economy/agri-business/indias-role-as-key-supplier-in-global-grains-market-has-shrunk-says-usda/article68521877.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/todays-paper/tp-agri-biz-and-commodity/y0f2kg/article67823146.ece/alternates/LANDSCAPE_1200/Offtake-in-FCI-G70CCJD2L.4.jpg.jpg",
		// 	"publishedAt": "2024-08-14T03:30:00Z",
		// 	"content": "Indias role as a key supplier to the global gains market has diminished over the past three years due to strong domestic demand and the Governments policies to keep domestic supplies within the count… [+4794 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "PTI",
		// 	"title": "Soon, passengers will not have to show passports at Dubai Airport to enter or exit UAE: CEO Dubai airport",
		// 	"description": "The CEO further announced plans to replace all hand baggage screening machines with state-of-the-art level three machines, eliminating the need for passengers to remove laptops and liquids.",
		// 	"url": "https://www.thehindubusinessline.com/multimedia/video/soon-passengers-will-not-have-to-show-passports-at-dubai-airport-to-enter-or-exit-uae-ceo-dubai-airport/article68523806.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/news/1j8iq9/article68523807.ece/alternates/LANDSCAPE_1200/dufai%20airport.jpg",
		// 	"publishedAt": "2024-08-14T07:28:55Z",
		// 	"content": "Dubai Airport is set to revolutionise the passenger experience with significant investments in advanced technology.\r\nIn an exclusive interview with PTI Video, Dubai Airport CEO Paul Griffiths announc… [+2430 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "KS Badri Narayanan",
		// 	"title": "Stocks that will see action today: August 14, 2024",
		// 	"description": "Buzzing stocks: Reliance, L&T, Hindalco, Vedanta, Nykaa, Alembic Pharma, Bombay Dyeing, Shalby, Sunteck Realty, 63 Moons Tech, SH Kelkar, Lemon Tree",
		// 	"url": "https://www.thehindubusinessline.com/markets/stocks-that-will-see-action-today-14-august-2024/article68521956.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/ivyodf/article68520849.ece/alternates/LANDSCAPE_1200/PO12_Buy_or_Sell.jpg",
		// 	"publishedAt": "2024-08-14T02:50:06Z",
		// 	"content": "Hindalco Industries has said Aditya Birla Group Chairman Kumar Mangalam Birlas children Ananya Birla and Aryaman Vikram Birla have been inducted on its board. The board of Hindalco Industries Ltd, at… [+5082 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "BL Bengaluru Bureau",
		// 	"title": "Bengaluru tops in green leasing: 68% of total leasing are green buildings",
		// 	"description": "The green leasing in the city has increased by 22.85 per cent year-on-year (YoY) to 12.9 msft in Q2FY24 from 10.5 msft in the corresponding quarter preceding year",
		// 	"url": "https://www.thehindubusinessline.com/news/real-estate/bengaluru-tops-in-green-leasing-68-of-total-leasing-are-green-buildings/article68520247.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/em7nt3/article68446181.ece/alternates/LANDSCAPE_1200/Aerial_view_06.jpg",
		// 	"publishedAt": "2024-08-14T03:41:31Z",
		// 	"content": "Bengaluru leads the green building adoption with 16.5 million square feet leases between January 2023 and July 2024 totaling to 68 per cent of total leasing in the city, as per Colliers Report. Engin… [+1483 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "BL Kochi Bureau",
		// 	"title": "Kerala planters rebut reports on soil conditions in tea gardens for landslides",
		// 	"description": "APK refutes claims linking tea plantations to landslides, citing sustainable practices and scientific studies on soil health.",
		// 	"url": "https://www.thehindubusinessline.com/economy/agri-business/kerala-planters-rebut-reports-on-soil-conditions-in-tea-gardens-for-landslides/article68520276.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/todays-paper/tp-agri-biz-and-commodity/v82ffo/article68081342.ece/alternates/LANDSCAPE_1200/India%E2%80%99s-2024-25GM0CMILDB.4.jpg.jpg",
		// 	"publishedAt": "2024-08-14T04:47:44Z",
		// 	"content": "The Association of Planters of Kerala has refuted reports of soil conditions in tea plantations are responsible for landslides. \r\nPrince Thomas, Chairman, APK said in a statement that tea plantations… [+1946 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "BL Bengaluru Bureau",
		// 	"title": "Fresh Bus raises ₹87.5 crore in Series A funding",
		// 	"description": "Funding led by transportation-focused VC fund Maniv; Shell Ventures, Alteria Capital, and existing investor Riverwalk Holdings also participated in the fund-raise",
		// 	"url": "https://www.thehindubusinessline.com/companies/fresh-bus-raises-875-crore-in-series-a-funding/article68521423.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/q1ax5k/article68516121.ece/alternates/LANDSCAPE_1200/PO30_Fund_manager.jpg",
		// 	"publishedAt": "2024-08-14T01:49:50Z",
		// 	"content": "The inter-state electric bus service provider, Fresh Bus, has raised 87.5 crore in a Series A funding round. The funding was led by early-stage transportation-focused VC fund Maniv, and saw participa… [+665 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "Akhil Nallamuthu & BL Research Bureau",
		// 	"title": "Bank Nifty prediction today — August 14, 2024: Wait and watch",
		// 	"description": "Bank Nifty index and futures analysis with stock performance, support, and resistance levels for traders to consider.",
		// 	"url": "https://www.thehindubusinessline.com/portfolio/technical-analysis/bank-nifty-prediction-today-august-14-2024-wait-and-watch/article68523487.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/sxklhs/article68523599.ece/alternates/LANDSCAPE_1200/CCI_UDHindu_KSL_U536IGT1Q_R1570955600_1_a0db92aa-c82a-4d7a-be62-c3f5a05a98c0.jpg",
		// 	"publishedAt": "2024-08-14T06:10:20Z",
		// 	"content": "Bank Nifty began todays session slightly higher at 49,887 compared to yesterdays close of 49,832. The index is now at 49,800.\r\nState Bank of India is the best performing stock in the index by advanci… [+1523 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "ANI",
		// 	"title": "SC says states can recover past tax dues on mining from April 1, 2005",
		// 	"description": "A nine-judge Constitution bench directed that these past dues be paid in a staggered manner over the next 12 years, starting from April 1, 2026",
		// 	"url": "https://www.thehindubusinessline.com/economy/sc-says-states-can-recover-past-tax-dues-on-mining-from-april-1-2005/article68523629.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/pn2igw/article68521486.ece/alternates/LANDSCAPE_1200/IMG_Miners_work_at_Magad_2_1_HPD4RJH7.jpg",
		// 	"publishedAt": "2024-08-14T06:32:29Z",
		// 	"content": "The Supreme Court on Wednesday ruled that mineral-rich states can collect past dues on royalty and taxes on mines and mineral-bearing land from April 1, 2005, from both the Centre and mining lease ho… [+2975 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "Krishnadas Rajagopal",
		// 	"title": "SC allows States to levy mines tax retrospectively from April 1, 2005",
		// 	"description": "But waives interest or penalty for States’ retrospective tax demands from April 1, 2005 to July 25, 2024; Staggers payment over 12 years, starting from April 1, 2026",
		// 	"url": "https://www.thehindubusinessline.com/economy/sc-allows-states-to-levy-mines-tax-retrospectively-from-april-1-2005/article68523629.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/pn2igw/article68521486.ece/alternates/LANDSCAPE_1200/IMG_Miners_work_at_Magad_2_1_HPD4RJH7.jpg",
		// 	"publishedAt": "2024-08-14T06:32:29Z",
		// 	"content": "The Supreme Court on Wednesday declined pleas by the Centre and assessees to apply its July 25 majority judgment upholding the power of State Legislatures to tax mines and minerals rights only with p… [+3953 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Economictimes.com"
		// 	},
		// 	"author": null,
		// 	"title": "Bharti's BT Group deal could open doors for the 'real East India Company' to flourish",
		// 	"description": "Bharti Enterprises is set to acquire a 24.51% stake in British Telecom for $4 billion, marking a significant outbound deal for an Indian firm. This acquisition, which follows the UK-India Technology Security Initiative, signals deepening business ties and pot…",
		// 	"url": "https://m.economictimes.com/opinion/et-commentary/view-bhartis-bt-group-deal-could-open-doors-for-the-real-east-india-company-to-flourish/articleshow/112512629.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112512721,width-1200,height-630,imgsize-25810,overlay-economictimes/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:07:26Z",
		// 	"content": "Bharti Airtel and BT have had a synergistic relationship for over two decades. The latter owned 21% stake along with two board seats in Bharti Airtel from 1997 to 2001. During the last two decades, t… [+4078 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Expresso.pt"
		// 	},
		// 	"author": "Henrique Monteiro, Lourenço Pereira Coutinho, Gustavo Carvalho",
		// 	"title": "A independência da Índia: dos protestos liderados por Gandhi, ao esgotamento do Reino Unido e a eterna disputa com o Paquistão",
		// 	"description": "\u003Cp\u003ENeste episódio, Henrique Monteiro e Lourenço Pereira Coutinho conversam sobre a Índia britânica, o Raj britânico, que durou de 1858 a 1947. Oiça aqui o podcast A História Repete-se\u003C/p\u003E",
		// 	"url": "https://expresso.pt/podcasts/a-historia-repete-se/2024-08-14-a-independencia-da-india-dos-protestos-liderados-por-gandhi-ao-esgotamento-do-reino-unido-e-a-eterna-disputa-com-o-paquistao-32bf5248",
		// 	"urlToImage": "https://images.impresa.pt/expresso/2024-08-14-gandhi.jpg-b15a565b",
		// 	"publishedAt": "2024-08-14T07:00:00Z",
		// 	"content": "Em 1858, os territórios indianos sob administração da Companhia das Índias Orientais passaram para a administração direta das autoridades britânicas, isto na sequência da revolta dos cípaios. Seguiu-… [+2043 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "नेहा बाथम",
		// 	"title": "जिस सेमिनार हॉल में मिली थी लेडी डॉक्टर की लाश, सामने आया उसका VIDEO",
		// 	"description": "कोलकाता लेडी डॉक्टर मर्डर-रेप मामले को लेकर इस समय देश में काफी गुस्से का माहौल है. वहीं उस सेमिनार रूम के अंदर का वीडियो भी सामने आया है, जहां लेडी डॉक्‍टर के साथ हैवान‍ियत की हदें पार की गईं थी. देखिए 9 बज गए",
		// 	"url": "https://www.aajtak.in/programmes/9-baj-gaye/video/kolkata-doctor-rape-murder-case-cbi-team-arrives-in-kolkata-watch-seminar-hall-inside-hospital-video-2010140-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc47aa5dbf2-kolkata-news-145904803-16x9.png",
		// 	"publishedAt": "2024-08-14T05:59:42Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "शशि तुषार शर्मा",
		// 	"title": "गुजरात में देशभक्ति का माहौल, हर घर हर हाथ में लहराया तिरंगा",
		// 	"description": "देश इस समय आजादी के रंग में रंगा हुआ है. वहीं मंगलवार को अहमदाबाद में तिरंगा रैली निकाली गई. इस दौरान गृहमंत्री अमित शाह और गुजरात के सीएम भूपेंद्र पटेल मौजूद रहे. देखिए गुजरात आजतक",
		// 	"url": "https://www.aajtak.in/programmes/gujarat-aajtak/video/gujrat-home-minister-amit-shah-joined-tiranga-rally-in-ahmedabad-video-2009993-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc0bd749bfe-amit-shah-144349938-16x9.png",
		// 	"publishedAt": "2024-08-14T01:54:09Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "aajtak.in",
		// 	"title": "वक्फ की जमीन पर मदरसा बनवाएंगे नीतीश कुमार, BJP का रिएक्शन आया सामने",
		// 	"description": "बिहार में नीतीश कुमार अगुवाई वाली सरकार ने वक्फ बोर्ड की जमीन पर 21 मदरसे बनवाने का ऐलान किया है. वहीं इसे लेकर बीजेपी में मिलीजुली प्रतिक्रिया सामने आ रही है. इंदौर (महू) से बीजेपी विधायक  ऊषा ठाकुर ने मदरसे बंद करने की मांग कर दी है.देखिए video",
		// 	"url": "https://www.aajtak.in/india/news/video/nitish-kumars-madarsa-construction-waqf-land-decision-creates-political-tension-between-bjp-and-jdu-video-frvd-2010205-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc658b50546-nitish-kumar-140634436-16x9.png",
		// 	"publishedAt": "2024-08-14T08:06:55Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "शशि तुषार शर्मा",
		// 	"title": "पंजाब आजतक: CM मान ने युवाओं को दिया बड़ा तोहफा, PM पर साधा निशाना",
		// 	"description": "स्वतंत्रता दिवस से पहले पंजाब के सीएम भगवंत मान ने युवाओं को बड़ा तोहफा दे दिया. दरअसल मुख्यमंत्री भगवंत मान ने मंगलवार को विभिन्न विभागों में नवनियुक्त 417 युवाओं को नियुक्ति पत्र सौंपे. वहीं उन्होंने इस दौरान PM मोदी पर जमकर निशाना साधा.देखें पंजाब आजतक",
		// 	"url": "https://www.aajtak.in/programmes/punjab-aajtak/video/punjab-cm-bhagwant-mann-gave-a-big-gift-to-youth-attack-on-pm-narendra-modi-degree-video-2009983-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc0a2181725-bhagwant-mann-143632211-16x9.png",
		// 	"publishedAt": "2024-08-14T01:37:28Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "aajtak.in",
		// 	"title": "जहां हुआ डॉक्टर का रेप के बाद मर्डर, देखें उस सेमिनार हॉल का वीडियो",
		// 	"description": "कोलकाता के आरजी कर मेड‍िकल कॉलेज में जून‍ियर डॉक्‍टर की रेप के बाद हत्‍या का मामला सीबीआई को सौंप दिया गया है. वहीं उस सेमिनार रूम के अंदर का वीडियो भी सामने आया है, जहां लेडी डॉक्‍टर के साथ हैवान‍ियत की हदें पार की गईं. देखिए Exclusive वीडियो...",
		// 	"url": "https://www.aajtak.in/india/news/video/kolkata-rape-murder-case-rg-kar-medical-college-watch-exclusive-seminal-hall-video-frvd-2010032-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc25cbdc947-kolkata-rape-case-143435220-16x9.png",
		// 	"publishedAt": "2024-08-14T03:33:20Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "aajtak.in",
		// 	"title": "क्या कांग्रेस और आप मिलकर लड़ेगी चुनाव? मनीष सिसोदिया ने दिया जवाब",
		// 	"description": "दिल्ली के पूर्व डिप्टी सीएम मनीष सिसोदिया ने शराब घोटाले में 17 महीने बाद जेल से बाहर आने पर आजतक को पहला इंटरव्यू दिया है. जिसमें उन्होंने डिप्टी सीएम पद , अरविंद केजरीवाल, शराब घोटाले और दिल्ली विधानसभा चुनाव को लेकर खुलकर बात कही हैं.  देखिए",
		// 	"url": "https://www.aajtak.in/india/delhi/video/manish-sisodia-exclusive-interview-after-release-jail-big-statement-on-congress-alliance-arvind-kejriwal-pm-modi-video-frvd-2010265-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc6090a524d-manish-sisodia-144519994-16x9.png",
		// 	"publishedAt": "2024-08-14T08:00:55Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Aajtak.in"
		// 	},
		// 	"author": "aajtak.in",
		// 	"title": "क्या अरविंद केजरीवाल को मिलेगी जमानत? सुप्रीम कोर्ट में आज सुनवाई",
		// 	"description": "सुप्रीम कोर्ट में दिल्ली के मुख्यमंत्री अरविंद केजरीवाल की याचिका पर आज बुधवार को सुनवाई करेगा. इस याचिका में अरविंद केजरीवाल ने नई आबकारी नीति में अनियमितताओं के मामले में अपनी गिरफ्तारी को चुनौती दी है. देखिए VIDEO",
		// 	"url": "https://www.aajtak.in/india/news/video/arvind-kejriwal-bail-plea-hearing-in-supreme-court-today-delhi-liquor-scam-video-frvd-2010058-2024-08-14",
		// 	"urlToImage": "https://akm-img-a-in.tosshub.com/aajtak/images/video/202408/66bc32878aace-arvind-kejriwal-news-142854737-16x9.png",
		// 	"publishedAt": "2024-08-14T04:29:24Z",
		// 	"content": "Copyright © 2024 Living Media India Limited. For reprint rights: Syndications Today"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ETMarkets.com",
		// 	"title": "Cummins India shares drop 0.88% as Sensex rises",
		// 	"description": "A total of 2,482 shares changed hands on the counter till 11:26AM (IST)",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/cummins-india-shares-drop-0-88-as-sensex-rises/articleshow/112514029.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-83797651,width-1200,height-630,imgsize-32000,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:56:52Z",
		// 	"content": "(What's moving Sensex and Nifty Track latest market news, stock tips, Budget 2024 and expert advice, on ETMarkets. Also, ETMarkets.com is now on Telegram. For fastest news alerts on financial markets… [+317 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ETMarkets.com",
		// 	"title": "Stock market update: Mining stocks down as market rises",
		// 	"description": "The 30-share BSE Sensex was  up  13.17 points at 78969.2",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-mining-stocks-down-as-market-rises/articleshow/112513553.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-82697732,width-1200,height-630,imgsize-184256,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:40:51Z",
		// 	"content": "NEW DELHI: Mining stocks were trading lower on Wednesday at 11:10AM Pokarna Ltd.(up 14.48%) and Madhav Marbles &amp; Granites Ltd.(up 0.96%) were among the top gainers. \r\nNMDC Ltd.(down 4.79%), MOIL … [+1408 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ETMarkets.com",
		// 	"title": "Share price of Info Edge rises as Nifty strengthens",
		// 	"description": "A total of 1,104 shares changed hands on the counter till 10:56AM (IST).",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/share-price-of-info-edge-rises-as-nifty-strengthens/articleshow/112513184.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-83549420,width-1200,height-630,imgsize-22674,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:26:10Z",
		// 	"content": "Shares of Info Edge (India) Ltd. gained 1.21 per cent to Rs 7172.15 in Wednesday's trade as of 10:56AM (IST). The stock hit a high price of Rs 7204.3 and low of Rs 7063.9 during the session. \r\nThe re… [+986 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ANI",
		// 	"title": "Number of active investors on NSE surged by 13.9% in June: NSE report",
		// 	"description": "The number of active investors on the National Stock Exchange (NSE) has surged by 13.9 per cent month-on-month, reaching 1.5 crore in June. This increase marks the third consecutive month of growth in active market users.",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/news/number-of-active-investors-on-nse-surged-by-13-9-in-june-nse-report/articleshow/112515688.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112515708,width-1200,height-630,imgsize-2407908,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T06:51:49Z",
		// 	"content": "The number of active investors on the National Stock Exchange (NSE) surged by 13.9 per cent month-on-month, reaching 1.5 crore in June. This increase marks the third consecutive month of growth in ac… [+2134 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "PTI",
		// 	"title": "Rupee rises 7 paise to 83.90 against US dollar in early trade",
		// 	"description": "The Indian rupee gained 7 paise to reach 83.90 against the US dollar due to the American currency's retreat after a softer-than-expected Producer Price Index. Forex traders anticipated Indian trade data and US CPI data. On Tuesday, the rupee closed at 83.97. …",
		// 	"url": "https://economictimes.indiatimes.com/markets/forex/rupee-rises-7-paise-to-83-90-against-us-dollar-in-early-trade/articleshow/112512599.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112512603,width-1200,height-630,imgsize-47754,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:00:05Z",
		// 	"content": "The Indian rupee appreciated 7 paise to 83.90 against the US dollar in early trade on Wednesday, as the American currency retreated from its elevated levels. Forex traders said the US dollar has weak… [+1520 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ET Bureau",
		// 	"title": "Inclusion of 7 stocks in MSCI indices could draw $3 billion",
		// 	"description": "India saw an influx of up to $3 billion in August due to MSCI's adjustments to its indices. HDFC Bank's weight was increased, and restrictions on Adani Group stocks were lifted. Seven companies joined the global standard index, boosting India's weight in the …",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/news/inclusion-of-7-stocks-in-msci-indices-could-draw-3-billion/articleshow/112509197.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112509194,width-1200,height-630,imgsize-138804,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T01:46:44Z",
		// 	"content": "Mumbai : India could see inflows of up to $3 billion by the end of August due to the scheduled inclusion of select stocks by index provider MSCI in its benchmarks. In addition to the inclusion of sev… [+3461 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Shivendra Kumar",
		// 	"title": "5 lessons from Rakesh Jhunjhunwala's investment philosophy on his 2nd death anniversary",
		// 	"description": "Rakesh Jhunjhunwala, also known as the Warren Buffett of India, passed away two years ago. Renowned for his long-term investment strategy and faith in competent management, Jhunjhunwala managed Rare Enterprises. His legacy emphasizes patience, pragmatism, and…",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/news/5-lessons-from-rakesh-jhunjhunwalas-investment-philosophy-on-his-2nd-death-anniversary/articleshow/112513146.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112513149,width-1200,height-630,imgsize-196260,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:24:46Z",
		// 	"content": "Ace investor late Rakesh Jhunjhunwala, often referred to as the Big Bull of Indian stock markets, passed away 2 years ago on this day and as investors remember him today on his second death anniversa… [+3248 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Nishtha Awasthi",
		// 	"title": "PharmEasy co-founder-backed company files DRHP for 600 crore IPO. Check details",
		// 	"description": "The company intends to use the net proceeds from the issue towards the repayment/prepayment of certain outstanding borrowings, funding the working capital requirements of the company and its subsidiary Buildmex-Infra, purchase of partial shareholding from exi…",
		// 	"url": "https://economictimes.indiatimes.com/markets/ipos/fpos/pharmeasy-co-founder-backed-company-files-drhp-for-600-crore-ipo-check-details/articleshow/112517737.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112517737,width-1200,height-630,imgsize-3738,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T07:59:24Z",
		// 	"content": "Siddharth Bhaskar Shah-backed Infratech company ArisInfra has filed its Draft Red Herring Prospectus (DRHP) with market regulator Securities and Exchange Board of India to raise funds via the initial… [+1949 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Economictimes.com"
		// 	},
		// 	"author": "Getty Images",
		// 	"title": "20 times return in 20 years: Nifty trumps S&P 500, gold, other asset classes",
		// 	"description": "Indian equity indices are currently on a bull run and analysts believe that India is a long-term story. The indices have remained resilient despite various announcements coming in on taxation in the budget and SEBI’s effort to reduce the speculative trading i…",
		// 	"url": "https://m.economictimes.com/markets/stocks/news/20-times-return-in-20-years-nifty-trumps-sp-500-gold-other-asset-classes/stock-ing-up/slideshow/112513345.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112513345,width-1070,height-580,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:26:42Z",
		// 	"content": "Indian equity indices are currently on a bull run and analysts believe that India is a long-term story. The indices have remained resilient despite various announcements coming in on taxation in the … [+450 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Nikhil Agarwal",
		// 	"title": "Fund Manager Talk: 3 sectors within capex theme can come under selling pressure, says Ambit’s Bhargav Buddhadev",
		// 	"description": "Bhargav Buddhadev of Ambit Asset Management identified potential selling pressure in capex-oriented sectors like roads, railways, and defense due to budget cuts. He highlighted optimism in sectors like rural recovery and chemicals. Investors were advised on m…",
		// 	"url": "https://economictimes.indiatimes.com/markets/expert-view/fund-manager-talk-3-sectors-within-capex-theme-can-come-under-selling-pressure-says-ambits-bhargav-buddhadev/articleshow/112511356.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112511355,width-1200,height-630,imgsize-26092,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T04:04:11Z",
		// 	"content": "Bhargav Buddhadev, Fund Manager, Ambit Asset Management, warns that few sectors within capex-oriented themes could see selling pressure. Sectors like roads, railways, defense could see selling pressu… [+6548 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ETMarkets.com",
		// 	"title": "Stock market update: Nifty Realty index falls 0.8% in an upbeat market",
		// 	"description": "The Nifty Realty index was trading 0.8 per cent  down  at 1019.85.",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/stock-market-update-nifty-realty-index-falls-0-8-in-an-upbeat-market/articleshow/112513872.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-77922857,width-1200,height-630,imgsize-132855,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:51:03Z",
		// 	"content": "NEW DELHI: The Nifty Realty index traded negative around 11:20AM(IST)on Wednesday in an upbeat market. Sunteck Realty Ltd.(up 3.06 per cent), Mahindra Lifespace Developers Ltd.(up 1.06 per cent) and … [+1075 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Nikhil Agarwal",
		// 	"title": "Mining stocks like NMDC, Tata Steel fall up to 5% on SC royalty order",
		// 	"description": "Shares of PSU National Mineral Development Corporation (NMDC) were among the worst hit and were trading over 5% lower at Rs 212 on NSE, while Tata Steel fell over 4%.",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/news/mining-stocks-like-nmdc-tata-steel-fall-up-to-5-on-sc-royalty-order/articleshow/112513510.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112513578,width-1200,height-630,imgsize-7312,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:42:31Z",
		// 	"content": "Shares of miners like NMDC, Tata Steel, Vedanta, Hindustan Zinc, and MOIL fell up to 5% on Wednesday after the Supreme Court allowed states to collect past dues on royalty on minerals-bearing land fr… [+1432 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ETMarkets.com",
		// 	"title": "Ambuja Cements shares down 0.88% as Sensex rises",
		// 	"description": "A total of 23,905 shares changed hands on the counter till 11:41AM (IST)",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/stock-watch/ambuja-cements-shares-down-0-88-as-sensex-rises/articleshow/112514414.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-83515267,width-1200,height-630,imgsize-853209,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T06:12:13Z",
		// 	"content": "Shares of Ambuja Cements Ltd. fell 0.88 per cent to Rs 618.35 in Wednesday's session as of 11:41AM (IST) even as the equity benchmark Sensex traded 87.62 points higher at 79043.65. Earlier in the day… [+1715 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Nishtha Awasthi",
		// 	"title": "F&O Radar | Deploy Bear Put Spread in Nifty to gain from bearish market stance",
		// 	"description": "Traders use this strategy to profit from an anticipated decline in the underlying asset’s price by buying a higher strike put (in-the-money) and selling a lower strike put (out-of-the-money) with the same expiry. This results in a net debit, as the ITM put’s …",
		// 	"url": "https://economictimes.indiatimes.com/markets/options/fo-radar-deploy-bear-put-spread-in-nifty-to-gain-from-bearish-market-stance/articleshow/112511007.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112511030,width-1200,height-630,imgsize-108244,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T03:42:36Z",
		// 	"content": "The Nifty index has been consolidating within a range of 600 points over the last seven trading sessions, making lower lows on a daily scale, with resistance levels gradually shifting lower.It also f… [+2188 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Akash Podishetti",
		// 	"title": "GIFT Nifty signals a positive start for D-Street. Here's the trading setup for today's session",
		// 	"description": "Domestic markets closed with losses for the second day in a row amid consolidation and a lack of positive triggers. Gift Nifty indicated a positive start, while oil prices rose on shrinking U.S. inventories. The rupee remained flat against the dollar. Investo…",
		// 	"url": "https://economictimes.indiatimes.com/markets/stocks/news/gift-nifty-signals-a-positive-start-for-d-street-heres-the-trading-setup-for-todays-session/articleshow/112508978.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112509035,width-1200,height-630,imgsize-62754,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T01:27:47Z",
		// 	"content": "Domestic markets, after a lacklustre start on Tuesday, came under pressure and closed with losses, marking a second straight day in the red.\"We expect the market to continue its consolidation mode du… [+3003 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ET Now",
		// 	"title": "Sit on the sidelines! Volatility is high and both shorts & longs get bought out daily: Ajay Bagga",
		// 	"description": "Ajay Bagga advised investors to stay on the sidelines due to high market volatility, primarily affecting equity and FX markets. Despite strong oversubscription in IPOs driven by liquidity, he cautioned that valuations are elevated. He highlighted opportunitie…",
		// 	"url": "https://economictimes.indiatimes.com/markets/expert-view/sit-on-the-sidelines-volatility-is-high-and-both-shorts-longs-get-bought-out-daily-ajay-bagga/articleshow/112497138.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112497114,width-1200,height-630,imgsize-17574,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T02:45:00Z",
		// 	"content": "Ajay Bagga, Market Expert, says we have the makings of a stalled further rise in the market. Sideways might be a better strategy or waiting this out might be better, both shorts and longs will get bo… [+6103 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "ET Now",
		// 	"title": "Is there value and scope for outperformance in HPCL, BPCL & IOC? Dipan Mehta answers",
		// 	"description": "Dipan Mehta from Elixir Equities discussed the investment potential of oil PSUs like HPCL, BPCL, and IOC, highlighting their earnings volatility. He noted the valuation compression in PSU sectors such as mining and engineering, and suggested potential in PSU …",
		// 	"url": "https://economictimes.indiatimes.com/markets/expert-view/is-there-value-and-scope-for-outperformance-in-hpcl-bpcl-ioc-dipan-mehta-answers/articleshow/112513318.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112513294,width-1200,height-630,imgsize-23128,overlay-etmarkets/photo.jpg",
		// 	"publishedAt": "2024-08-14T05:32:04Z",
		// 	"content": "Dipan Mehta, Director, Elixir Equities, says HPCL, BPCL &amp; IOC are great trading stocks and you could get 15-20-30% return in a few weeks if you get the timing right. But from a longer-term perspe… [+7955 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Sameer Gupta and Surabhi Marwah",
		// 	"title": "NRI cannot claim LTCG indexation benefit while selling property in India",
		// 	"description": "LTCG indexation benefit on sale of house property: The government has provided partial relief to the homeowners by providing an option of indexation benefit for properties bought before July 23, 2024. However, this benefit is available only to resident indivi…",
		// 	"url": "https://economictimes.indiatimes.com/wealth/tax/nri-cannot-claim-ltcg-indexation-benefit-while-selling-property-in-india/articleshow/112513443.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112513855,width-1200,height-630,imgsize-64302,overlay-etwealth/photo.jpg",
		// 	"publishedAt": "2024-08-14T06:18:09Z",
		// 	"content": "In Budget 2024, Finance Minister Nirmala Sitharaman proposed reducing the LTCG tax on property to 12.5% from 20% while removing the benefit of indexation, impacting homeowners. After much debate, the… [+9133 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Neelanjit Das",
		// 	"title": "Deadline for reassessment of these old ITRs approaching; Know who can get tax notice u/s 148 by August 31, 2024",
		// 	"description": "Income tax notice: The income tax department may send you a tax notice for AY 2018-19 (FY 2017-18) by August 31, 2024 if there is exists any income of Rs 50 lakh or more which escaped assessment. Budget 2024 amended the tax provisions to now reduce the time l…",
		// 	"url": "https://economictimes.indiatimes.com/wealth/tax/deadline-for-reassessment-of-these-old-itrs-approaching-know-who-can-get-tax-notice-u/s-148-by-august-31-2024/articleshow/112492710.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112493145,width-1200,height-630,imgsize-20662,overlay-etwealth/photo.jpg",
		// 	"publishedAt": "2024-08-14T04:50:45Z",
		// 	"content": "The last date for the tax department to issue an income tax notice is August 31, 2024, if the undisclosed income is Rs 50 lakh or more in the assessment year 2018-19 (financial year 2017-18). The Bud… [+6167 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": "the-times-of-india",
		// 	  "name": "The Times of India"
		// 	},
		// 	"author": "Sneha Kulkarni",
		// 	"title": "Investing in FDs with an NBFC? Check new RBI rules on premature withdrawal, nominations applicable from Jan 1, 2025",
		// 	"description": "New FD rules: The revised guidelines cover topics such as the acceptance of public deposits, including regulations concerning nominations, reimbursement of public deposits for urgent expenses, informing depositors about deposit maturity, and others.",
		// 	"url": "https://economictimes.indiatimes.com/wealth/save/investing-in-fds-with-an-nbfc-check-new-rbi-rules-on-premature-withdrawal-nominations-applicable-from-jan-1-2025/articleshow/112515448.cms",
		// 	"urlToImage": "https://img.etimg.com/thumb/msid-112515889,width-1200,height-630,imgsize-656426,overlay-etwealth/photo.jpg",
		// 	"publishedAt": "2024-08-14T06:48:40Z",
		// 	"content": "The Reserve Bank of India (RBI) has issued a revised regulatory framework circular relating to HFCs (Housing finance companies) and NBFCs (Non-banking Finance Companies) on August 12, 2024. The revis… [+3218 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "KR Srivats",
		// 	"title": "No fresh case against Apple: Competition panel",
		// 	"description": "Competition Commission of India recalls Apple probe report to protect legal rights, no fresh investigation ordered.",
		// 	"url": "https://www.thehindubusinessline.com/news/no-fresh-case-against-apple-competition-panel/article68523482.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/1nzp9r/article68523563.ece/alternates/LANDSCAPE_1200/2024-08-01T153553Z_1830731958_RC2279AMXWGJ_RTRMADP_3_APPLE-RESULTS.JPG",
		// 	"publishedAt": "2024-08-14T05:58:33Z",
		// 	"content": "The Competition Commission of India (CCI) has asserted that no fresh investigation has been launched against Apple even as the competition watchdog confirmed it has recalled an earlier Apple probe re… [+2495 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "BusinessLine"
		// 	},
		// 	"author": "Shishir Sinha",
		// 	"title": "After retail inflation, wholesale inflation dips to 2% in July",
		// 	"description": "July 2024 sees positive inflation rate due to food prices, while WPI eases with a favourable base effect.",
		// 	"url": "https://www.thehindubusinessline.com/economy/after-retail-inflation-wholesale-inflation-dips-to-2-in-july/article68523839.ece",
		// 	"urlToImage": "https://bl-i.thgim.com/public/incoming/961sgz/article68523908.ece/alternates/LANDSCAPE_1200/IMG_iStock-1400001523_2_1_IICKB5J6.jpg",
		// 	"publishedAt": "2024-08-14T08:05:08Z",
		// 	"content": "With a favourable base effect, wholesale inflation based on Wholesale Price Index (WPI) dipped to 2.04 per cent in July, data released on Wednesday by the commerce and industry ministry showed. It wa… [+2338 chars]"
		//   },
		//   {
		// 	"source": {
		// 	  "id": null,
		// 	  "name": "Livemint"
		// 	},
		// 	"author": "Rituraj Baruah",
		// 	"title": "Amid Bangladesh crisis, Centre eases norms for power exporters",
		// 	"description": "Adani Power to be a key beneficiary as it is the only exclusive electricity provider to the crisis-hit Bangladesh.",
		// 	"url": "https://www.livemint.com/industry/energy/amid-bangladesh-crisis-centre-eases-norms-for-power-exporters-11723617324249.html",
		// 	"urlToImage": "https://www.livemint.com/lm-img/img/2024/08/14/1600x900/Power-consumption-peaked-in-July-with-farmers-usin_1723622420933_1723622444068.jpg",
		// 	"publishedAt": "2024-08-14T08:07:23Z",
		// 	"content": "The Union ministry of power has amended the norms to widen the sources of coal for generating power for the purpose of exports and to help generating companies avert losses in case of payment default… [+3236 chars]"
		//   }], 
		articles: [],
		loading: false,
		page: 1
	}
	
	async componentDidMount() {
		let url = "https://newsapi.org/v2/everything?q=india&from=2024-08-14&to=2024-08-15&sortBy=popularity&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=1&pageSize=9";
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			totalResults: parsedData.totalResults
		});
	}	

	handleNextClick = async() => {
		let url =`https://newsapi.org/v2/everything?q=india&from=2024-08-14&to=2024-08-15&sortBy=popularity&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=${this.state.page + 1}&pageSize=3`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			page: this.state.page + 1
		})
	}	

	handlePrevClick = async() => {
		let url = `https://newsapi.org/v2/everything?q=india&from=2024-08-14&to=2024-08-15&sortBy=popularity&apiKey=f2a47bf9b5614fa1a14b2e7ffe51c6e8&page=${this.state.page - 1}&pageSize=3`;
		let data = await fetch(url);
		let parsedData = await data.json();
		this.setState({
			articles: parsedData.articles,
			page: this.state.page - 1
		})
	}

	render() {
		return (
			<div className='container my-3'>
				<div className="container my-5">
					<div className="d-flex justify-content-around">
						<button disabled={this.state.page===1} type="button" className="btn btn-dark m-1" onClick={this.handlePrevClick}> &larr; Previous</button>
						<button disabled={this.state.totalResults/6 <= this.state.page}type="button" className="btn btn-dark m-1" onClick={this.handleNextClick}>Next &rarr;</button>
					</div>
				</div>
				<div className="row">
					{this.state.articles.filter(article => article.description != null && article.urlToImage != null).map(article => (
						<div className="col-md-4 mb-4" key={article.url}>
							<NewsItem title={article.title} description={article.description} imageUrl={article.urlToImage} newsUrl={article.url} />
						</div>
					))}
				</div>
			</div>
		)
	}
}

export default News