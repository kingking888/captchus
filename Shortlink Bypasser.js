// ==UserScript==
// @name       Bypass All Shortlinks
// @name:id    Bypass Semua Shortlink
// @name:ug    Bypass بارلىق قىسقا ئۇلىنىشلار
// @name:ar    تجاوز الجميع الروابط المختصرة
// @name:he    לַעֲקוֹף את כל קישורים קצרים
// @name:hi    सभी शॉर्टलिंक को बायपास करें
// @name:ja    バイパス 全て ショートリンク
// @name:zh-CN 旁路 全部 短链接
// @name:zh-TW 旁路 全部 短鏈接
// @name:pt-BR Bypass Todos Links curtos
// @name:fr-CA Bypass Tout Lien courts
// @name:fr    Bypass Tout Lien courts
// @name:ko    모든 짧은 링크 우회
// @name:th    บายพาส ทั้งหมด ลิงค์สั้น
// @name:bg    Заобикаляне на всички кратки връзки
// @name:ro    Bypass Toate Linkuri scurte
// @name:fi    Ohittaa Kaikki Lyhyet linkit
// @name:it    Bypassare Tutto Collegamenti brevi
// @name:el    Παράκαμψη Ολα Σύντομοι σύνδεσμοι
// @name:eo    Pretervojo Ĉiuj Mallongaj ligiloj
// @name:es    Bypass Todos Enlaces cortos
// @name:hu    Bypass Összes Rövid linkek
// @name:nb    Omgå Alle Kortlenker
// @name:sk    Obísť Všetky Krátke odkazy
// @name:sv    Förbigå alla kortlänkar
// @name:sr    Zaobići Sve Kratke veze
// @name:pl    Bypass Wszystkie Krótkie linki
// @name:nl    Bypass Alle Korte links
// @name:de    Bypass Alle Kurzlinks
// @name:da    Bypass Alle Shortlinks
// @name:cs    Bypass Všechno Krátké odkazy
// @name:uk    Обхід всі Короткі посилання
// @name:ru    Обход Все Короткие ссылки
// @name:tr    Bypass Tüm Kısa Linkler
// @name:vi    Bỏ qua Tất cả Các liên kết ngắn
// @namespace  Violentmonkey Scripts
// @version    24.1
// @grant      none
// @author     Bloggerpemula
// @run-at     document-end
// @description    Bypass All Shortlinks Sites Automatically Skips Annoying Link Shorteners and No Annoying Ads, Directly to Your Destination, and now Support Auto Downloading Your Files
// @description:id Bypass Semua Situs Shortlink Secara Otomatis Langsung ke Tujuan Tanpa Iklan yang Mengganggu , Support Auto Download File
// @description:ug بارلىق قىسقا ئۇلىنىش تور بېكەتلىرىنى ئايلىنىپ ئۆتۈپ ، كىشىنى بىزار قىلىدىغان ئۇلىنىش قىسقارتقۇچنى ئاپتوماتىك ھالدا مەنزىلىڭىزگە ئاتلاڭ.
// @description:ar تجاوز جميع مواقع الروابط المختصرة يتخطى تلقائيًا أدوات تقصير الروابط المزعجة ، مباشرة إلى وجهتك
// @description:he עוקף את כל אתרי הקישורים הקצרים מדלג אוטומטית על מקצרי קישורים מעצבנים, ישירות ליעד שלך
// @description:hi सभी शॉर्टलिंक साइटों को बायपास करें, सीधे आपके गंतव्य पर कष्टप्रद लिंक शॉर्टनर को छोड़ दें
// @description:ja すべてのショートリンクサイトをバイパスすると、迷惑なリンクショートナーが自動的にスキップされ、宛先に直接送信されます
// @description:fr Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @description:ko 모든 짧은 링크 사이트 우회는 성가신 링크 단축기를 자동으로 건너뛰고 목적지로 직접 이동합니다.
// @description:th ข้ามไซต์ลิงค์สั้นทั้งหมดข้ามลิงค์ย่อที่น่ารำคาญโดยอัตโนมัติไปยังปลายทางของคุณ
// @description:bg Заобикаляне на всички сайтове с кратки връзки Автоматично пропуска досадните средства за съкращаване на връзки, директно до вашата дестинация
// @description:ro Omite toate site-urile cu linkuri scurte Omite automat elementele de scurtare a linkurilor enervante, direct către destinația ta
// @description:fi Ohita kaikki lyhytlinkkisivustot ohittaa automaattisesti ärsyttävät linkinlyhennykset suoraan määränpäähäsi
// @description:it Ignora tutti i siti di collegamenti brevi Salta automaticamente i fastidiosi accorciatori di collegamenti, direttamente alla tua destinazione
// @description:el Παράκαμψη όλων των τοποθεσιών σύντομων συνδέσμων Παρακάμπτει αυτόματα τα ενοχλητικά προγράμματα συντόμευσης συνδέσμων, απευθείας στον προορισμό σας
// @description:eo Preterpasi Ĉiuj Mallongaj Ligiloj-Ejoj Aŭtomate Saltas ĝenajn Ligilojn, Rekte al Via Celo
// @description:es Omitir todos los sitios de enlaces cortos omite automáticamente los acortadores de enlaces molestos, directamente a su destino
// @description:hu Az összes rövid hivatkozási webhely megkerülése automatikusan átugorja a bosszantó linkrövidítőket, közvetlenül az úticélra
// @description:nb Omgå alle korte lenker Nettsteder hopper automatisk over irriterende lenkeforkortere, direkte til destinasjonen din
// @description:sk Obíďte všetky stránky s krátkymi odkazmi, ktoré automaticky preskočia otravné skracovače odkazov priamo do vášho cieľa
// @description:sv Förbi alla korta länkar webbplatser hoppar automatiskt över irriterande länkförkortare, direkt till din destination
// @description:sr Zaobići sve stranice s kratkim vezama automatski preskače dosadne skraćivače veza, izravno na vaše odredište
// @description:pl Pomijaj wszystkie strony z krótkimi linkami automatycznie pomija irytujące skracacze linków, bezpośrednio do miejsca docelowego
// @description:nl Omzeil alle sites met korte links en slaat automatisch vervelende linkverkorters over, rechtstreeks naar uw bestemming
// @description:de Alle Short-Links-Sites umgehen Überspringt automatisch lästige Link-Shortener direkt zu Ihrem Ziel
// @description:da Omgå alle korte links-websteder springer automatisk irriterende linkforkortere over, direkte til din destination
// @description:cs Obejít všechny stránky s krátkými odkazy Automaticky přeskakuje otravné zkracovače odkazů přímo do vašeho cíle
// @description:uk Обійти всі сайти з короткими посиланнями. Автоматично пропускає дратівливі скорочення посилань безпосередньо до вашого пункту призначення
// @description:ru Обход всех сайтов с короткими ссылками автоматически пропускает надоедливые сокращатели ссылок, прямо к месту назначения
// @description:tr Tüm Kısa Linkleri Atla Siteler Can sıkıcı Link Kısaltıcıları Otomatik Olarak Atlar, Doğrudan Hedefinize
// @description:vi Bỏ qua tất cả các trang web liên kết ngắn tự động bỏ qua các trang web liên kết gây phiền nhiễu, trực tiếp đến đích của bạn
// @description:zh-cn 绕过所有短链接网站自动跳过烦人的链接缩短器，直接到您的目的地
// @description:zh-tw 繞過所有短鏈接網站自動跳過煩人的鏈接縮短器，直接到您的目的地
// @description:pt-br Ignorar todos os sites de links curtos ignora automaticamente encurtadores de links irritantes, diretamente para o seu destino
// @description:fr-ca Contourner tous les sites de liens courts saute automatiquement les raccourcisseurs de liens gênants, directement vers votre destination
// @include /^(https?:\/\/)(tmearn|jobklic|additionalgamer|uformations|makemoneywithurl|rifurl|shrinkearn|esenr|adsforfaucets|skip-url|pennbookcenter|publicananker|mikl4forex|michaelemad|miklpro|zirof|forex-golds|nawahi1|mmo1s|mosqam|semawur|forex-trnd|hoshilink|bit-url|cuts-url|coinlyhub|popimed|phoenixshorts|rayusmedya|enburl|madar-24|katflys|shortenbuddy|kiemlua|kekolink|smoner|djbhojpurisongs|shornet|clixshort|earnflies|urlty|sakastau|adsmoker|claimclicks|doctor-groups|earnwithshortlink|bitzite|link1s|diadiemcheckin|tudiendanhngon|chooyomi|staaker|lucidcam|coinsparty|forexlap|forexmab|linkjust|forex-articles|ponselharian|liinkat|thegoneapp|alocd|mobi2c|0x-bit|studyuo|hookeaudio|fc-lc|expertvn|markipli|downphanmem|kingsleynyc|theicongenerator|healthy4pepole|kiktu|1bitspace|healdad|marharo|ez4mods|try2link|ex-foary|discordserv|softechbharat|adcorto|movie4i|shopdorod|bitcoin-indo|crypto-news-hub|blogginglass|1shorten|amazingdarpon|lensabicara|tieutietkiem|bittalky|urlily|bablyfeed|crypto4tun|coin-free|dash-free|usdshort|coinsurl|cafenau|techacode|ls2earn|sevenjournals|mercedesellington|7misr4day|sama-pro|samaa-pro|imageresizertool|techrfour|ez4short|topnewsnew|gawishpro|ad-mezo|dz4link|skincarie|okrzone|dogemate|coinsearns|informaxonline|gaminplay|proviralhost|guardbolts|short-zero|infinitycoupon|mfk-shorter|donnaleehunt|gamalk-sehetk|adsafelink|cbshort|haymod|ltc-free|nulledsafe|dreamcheeky|cutpaid|fidlarmusic|rodjulian|anhdep24|shortlink.earnmotivation|short.clickscoin|money.alyoumeg|sl.claimfreebits|sl-1.btcbunch|sl-2.btcbunch|sl-3.btcbunch|apk.miuiku|apk.sekilastekno|wp.sekilastekno|bitefaucet|playgotoken|techrayzer|shorteet|bitlya|ecwizon|oncehelp|yummy-reciepes|loptelink|2shrt|charexempire|coindoog|shotzon|novelsapps|webhostingpost|nightfallnews|tirailangit|intercelestial|tribuntekno|vhorizads|bestcash2020|7nything|hoxiin|linkat4u|fooot-map|bellurl|abcshort|checkscoin|llinkon|priefy|dz-linkk|donia-tech|donia2tech|donia2link|short1s|up-urls|shrinkmoney|doodshort|paid4link|d.bawabatak|newlycrypto|kienthucrangmieng|wiki-topia|wingifta|aljoodm98|newworldnew|short-jambo|mazen-ve|bclikeqt|youssefsayed|fx4vip|shortzon|get4links|crickblaze|nostralink|clkmein|101desire|memangbau|hosting4lifetime|btcpany|bebodybuilder|mesho-link|eda-ah|newsharsh|oxolink|examkhata|linksht|note1s|adclickersbot|mobitaak|cashforlink.blogspot|redlifek|btcwalk|bdtechh|99faucet|modebaca|link-yz|shortfex|apkadmin|ayelads|appsbull|gawbne|mshortener|cutdomain|tkcounter|usersdrive|uptobox)(\.com)(\/.*)/
// @include /^(https?:\/\/)(.+)?(zolomix|cararegistrasi|5golink|birdurls|urlfiles|snkra|artiskini|sh2rt|byboe|medcpu|nousdecor|restorbio|bdnewsx|upshrink|gifans|jardima|jobswd|dogeearn|gkqnaexam|imperialstudy|ovlinks|imagenesderopaparaperros|w4earn|url2link|yofaurls|shortique|digiromotion|blog-forall|techymedies|gamelopte|adshort-url|cgyojna|riadcrypto|riadblog|askpaccosi|linktrims|gets4link|urlshortify|visflakes|apk4do|dineroshare|oyunzak|elwatanelyoum|ledifha|claimfey|htshort|shrinkito|panylink|kriptoryum|sisgy|wrbloggers|encyclopedia-24|tokenoto|intmagz|saly-cash|rancah|coinadfly|pay4url|delishwell|zippyshare)(\.com)(\/.*)/
// @include /^(https?:\/\/)(sehati|boxlink|zoxlink|moxlink|foxlink|forex-lab|watchdoge|arenaboard|ccsl|xz2|mshort|shrinkpay|adsgo|gainprofit|foofly|adnit|bestshort|shon|crypto-faucet|short-cash2|toptechtalk|foodyrecipe|cutearn|infinityfreescripts|st4ch|wizzly|saqercoin|cryptoon|porofly|morofly|zorofly|worofly|nooz|tooz|mgnet|crypteen|dogeen|coocly|doodly|fauceteen|k-sport|z-sport|n-sport|adcorto|speedynews|tecboy|cutdl|marocclickers|9bitcoin|gameen|fameen|yameen|phoenixs|girlporo|girlmoro|girlzoro|girlworo|cryptocoinearn|shorte|potoly|motoly|kotoly|ashort1a|zololink|blog.crypto-faucet|stores.filmyzilla-in|links.doctorcoin|cbs.trxking||temp-late|template-zone|coinzat|top-blog|kora-yalla|swzz|acortame|bitsyield|nivaprofit|alghtas|wizly|kishoter|horanews|linkfort|a1link|likn|short2fly|bcvc|java-script|nabits|playstore|welovecrypto|worldappsstore|shortplus|post.nites-tv|3vw|html-script|mrsaifi|st.kleaco|playlink|sportawy|edummm|fexkomin|2faucet)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(insuranceblog|insurance-space|bcdshort|insurglobal|lootlinks|adinsurance|urbharat|claimercorner|egfly|ajifly|urlmoney|dexlink|cekip|crypto-blog|megano-coin|doctorcoin)(\.xyz)(\/.*)/
// @include /^(https?:\/\/)(bigb0ss|neonlink|techydino|illink|world-trips|cryptourl|yoshare|forex-gold|allcryptoz|topcryptoz|techtrickonline|uniqueten|7apple|zurls|ovavibe|ccurl|luckydice|link1s|bitcomarket|url.namaidani|crewbase|crewus|shinchu|shinbhu|thumb8|thumb9|karimunbits|linkrex|cryptowidgets|dogeclick|adskip|hurirk|usfinf|xervoo|sport4you|hexupload|eloism|cutt)(\.net)(\/.*)/
// @include /^(https?:\/\/)(.+)?(100count|digitalnaz|fire-link|owllink|mozlink|ultraten|cryptosats|rocklinks|celinks|gazianteppetektemizleme|jiotech|jemari|link3s|boscoin)(\.net)(\/.*)/
// @include /^(https?:\/\/)(tnlink|jrlinks|shortzzy|coincity|techmart4u|9bitco|qualitystudymaterial|adoco|cuturl|missionhight|wpking|foodma|zagl|ls2earn|streamshort|cslink|coinbaze|blog.earn4fun|blog.earn2fly|shareus|referus|megafly|megaurl|csd.xmod|cutp|sureshjonna|earnmoj|riadshot|urlmoney|cplink|cryptomonitor|technoflip|linkshortify|studyranks|htlinks|techlearningtube|manthans|urlfly|linkocean)(\.in)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cashurl|linkad|bitcoinly|crazyblog|zolomix|technologylover|earnfort|spidermods|expertlinks|linksfire|largestpanel|linkres|rsrlink|linkstream)(\.in)(\/.*)?/
// @include /^(https?:\/\/)(aylink|linkszia|claimsatoshi|mynewsmedia|bitshort|gtlink|earnload|adfloz|linksly|droplink|123link|go.leolink|techload|linksfy|adshorti|ezimg)(\.co)(\/.*)/
// @include /^(https?:\/\/)(.+)?(takez|linksfire)(\.co)(\/.*)/
// @include /^(https?:\/\/)(ctbl|skyurl|girls-like|adsoro|gobits|zoss|shrinke|tlin|health-and|short.croclix|stfly|adbull|cutx|clicksfly|youshort|wildblog)(\.me)(\/.*)/
// @include /^(https?:\/\/)(.+)?(theconomy|adcorto|adsurfing|richlink|wildlinks)(\.me)(\/.*)/
// @include /^(https?:\/\/)(sitr|palpodcast|safelink|zipcrypto|cutgo|cutbits|shorthero|flylink|earncoin|downfile|savelink|linkshortify|url.coinfree|zo.coin-city|promo-visits)(\.site)(\/.*)/
// @include /^(https?:\/\/)(.+)?(bshopme|cekip|kolotoken)(\.site)(\/.*)/
// @include /^(https?:\/\/)(earnme|sanoybonito|forexat|automotur|1ist|kooza|atlai|claimbitco|1link|zentum|9btc)(\.club)(\/.*)/
// @include /^(https?:\/\/)(.+)?(mcrypto|usanewstoday)(\.club)(\/.*)/
// @include /^(https?:\/\/)(technicalramno1|paid4|freedoge|yousm|shortzzy|coinpayz|tr|zipfy|yocto|clk.dti|besturl|zuba|earnmy|3rab)(\.link)(\/.*)/
// @include /^(https?:\/\/)(.+)?(vshort|stex)(\.link)(\/.*)/
// @include /^(https?:\/\/)(shurt|shortit|adsy|bitlinks|clik|playstore)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adsee|prz|pong)(\.pw)(\/.*)/
// @include /^(https?:\/\/)(crypto-adria|bloogerspoot|vsbl)(\.ga)(\/.*)/
// @include /^(https?:\/\/)(url.faucet77|bloogerspoot|ashort2a-bro)(\.tk)(\/.*)/
// @include /^(https?:\/\/)(linkstom|techycontent|techfort|bloogerspoot|urlchanger)(\.ml)(\/.*)/
// @include /^(https?:\/\/)(onimports|link.encurtaon)(\.com\.br)(\/.*)/
// @include /^(https?:\/\/)(didhafairus|mycut|exee|onlineteori|go.safeadlink|sealink|onlineteori)(\.my\.id)(\/.*)/
// @include /^(https?:\/\/)(.+)?(apasih)(\.my\.id)(\/.*)/
// @include /^(https?:\/\/)(coinshub|myhealths|kiiw|passgen|wordcounter|shrink)(\.icu)(\/.*)/
// @include /^(https?:\/\/)(luckybits|newforex|uebnews|wplink|nbyts|wealthystyle|ls2earn|happy-living|earn-cash|yourtechnology|bell.healthyguy|network-earn)(\.online)(\/.*)/
// @include /^(https?:\/\/)(.+)?(adslinkfly|readi)(\.online)(\/.*)/
// @include /^(https?:\/\/)(exey|ezlinks|techmody|ouo|ex-e|upfiles|short.goldenfaucet|saly)(\.io)(\/.*)/
// @include /^(https?:\/\/)(.+)?(linkfly|usalink)(\.io)(\/.*)/
// @include /^(https?:\/\/)(zshort|earnfree|claimcrypto|cashearn|1ink|linkpay|moneylink|cryptoflare|intnews)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(.+)?(rota|netfile)(\.cc)(\/.*)/
// @include /^(https?:\/\/)(cryptoad|urlpay|wikile|cashforlink|uploadev)(\.org)(\/.*)/
// @include /^(https?:\/\/)(.+)?(fullreviews|freebcc|medipost|shrinkurl)(\.org)(\/.*)/
// @include /^(https?:\/\/)(linkmit|zcpa|jameeltips|mitly|adfoc)(\.us)(\/.*)/
// @include /^(https?:\/\/)(.+)?(yalla-shoot-now|forexeen)(\.us)(\/.*)/
// @include /^(https?:\/\/)(mixespecialidades|noweconomy|deportealdia|adshort|ay|pngit)(\.live)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hostingviral|linksos)(\.live)(\/.*)/
// @include /^(https?:\/\/)(earnads|genpassword|shrlink|coxsbd96|mshort)(\.top)(\/.*)/
// @include /^(https?:\/\/)(profitlink|zagl|scratch247|siyn|portablesusb|children-learningreading|azmath|machicon-akihabara|cooklike)(\.info)(\/.*)/
// @include /^(https?:\/\/)(hcsbtc|alertcrypto|aboutprofit|faucetcrypto)(\.eu)(\/.*)/
// @include /^(https?:\/\/)(freebitcoin|freelitecoin)(\.vip)(\/.*)/
// @include /^(https?:\/\/)(iir|tei)(\.ai)(\/.*)/
// @include /^(https?:\/\/)(aii|clk)(\.sh)(\/.*)/
// @include /^(https?:\/\/)(nukl|clk)(\.ink)(\/.*)/
// @include /^(https?:\/\/)(.+)?(i8l)(\.ink)(\/.*)/
// @include /^(https?:\/\/)(brixarena|abcreations)(\.tech)(\/.*)/
// @include /^(https?:\/\/)(kiw|redir.123file)(\.li)(\/.*)/
// @include /^(https?:\/\/)(azsoft|tronex|zonearn)(\.biz)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolatest|trangchu)(\.news)(\/.*)/
// @include /^(https?:\/\/)(cryptoads|adshort|1bit|paylinks|2the|careerhunter)(\.space)(\/.*)/
// @include /^(https?:\/\/)(.+)?(cryptolink|adz7short)(\.space)(\/.*)/
// @include /^(https?:\/\/)(cryptoaffiliates|android-mody)(\.store)(\/.*)/
// @include /^(https?:\/\/)(makeeasybtc|petslots|softindex|short.toptap)(\.website)(\/.*)/
// @include /^(https?:\/\/)(dogecoin|icut|linka)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(shortlinks|easysl|adlink)(\.click)(\/.*)/
// @include /^(https?:\/\/)(.+)?(hamody|nathanaeldan|freddyoctavio)(\.pro)(\/.*)/
// @include /^(https?:\/\/)(up-load|t2l|zcash)(\.one)(\/.*)/
// @include /^(https?:\/\/)(1dogecoin|faucet)(\.work)(\/.*)/
// @include /^(https?:\/\/)(easyfaucet|sh.feyorra|fey.feyorra|go.lokak|earnbitcoin|go.madshiba|blog.madshiba|go2.madshiba|test.madshiba|sh.claim)(\.fun)(\/.*)/
// @include /^(https?:\/\/)(doge-mining|gamefaucet|doge-mining|linkati)(\.win)(\/.*)/
// @include /^(https?:\/\/)(url\.)?(acefaucet|namaidani|magmint)(\.com)(\/.*)/
// @include /^(https?:\/\/)(cool-time|movies|anime|tech)(\.dutchycorp\.space)(\/.*)/
// @include /^https:\/\/cryptofans\.club\/(short|next|other|step)/
// @exclude /^https:\/\/claimclicks\.com\/(btc|ltc|doge|trx|faucetlist|ptclist)/
// @exclude /^https:\/\/claimercorner\.xyz\/(claimer\/dashboard|claimer\/advertise|claimer\/ptc|claimer\/deposit|claimer\/transfer|claimer\/tasks|claimer\/offerwall|claimer\/profile|claimer\/auto|claimer\/mining|claimer\/wheel|claimer\/login)/
// @exclude /^https:\/\/cryptosats\.net\/(cryptosats\/dashboard|cryptosats\/advertise|cryptosats\/ptc|cryptosats\/deposit|cryptosats\/transfer|cryptosats\/tasks|cryptosats\/offerwall|cryptosats\/profile|cryptosats\/auto|cryptosats\/mining|cryptosats\/wheel|cryptosats\/login)/
// @exclude /^https:\/\/easyfaucet\.fun\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude /^https:\/\/99faucet\.com\/(dashboard|advertise|ptc|deposit|transfer|tasks|offerwall|profile|auto|mining|dice|lottery|faucet|login)/
// @exclude    *://coinsearns.com/
// @exclude    *://luckydice.net/
// @match      *://dutchycorp.space/s*/*
// @match      *://dutchycorp.ovh/s*/*
// @match      *://*/recaptcha/*
// @match      *://shorts.lu/*
// @match      *://tny.so/*
// @match      *://za.uy/*
// @match      *://za.gl/*
// @match      *://c2g.at/*
// @match      *://fcc.lc/*
// @match      *://2ad.ir/*
// @match      *://prx.ee/*
// @match      *://coin.mg/*
// @match      *://send.cm/*
// @match      *://kimo.ma/*
// @match      *://clk.asia/*
// @match      *://goads.ly/*
// @match      *://mdn.rest/*
// @match      *://ouo.press/*
// @match      *://*.ouo.today/*
// @match      *://*.mdn.world/*
// @match      *://anonym.ninja/*
// @match      *://median.uno/*
// @match      *://romania.bz/*
// @match      *://pingit.im/*
// @match      *://nail.edu.pl/*
// @match      *://antonimos.de/*
// @match      *://carapedi.id/*
// @match      *://ashorturl.uk/*
// @match      *://bildirim.eu/ph/*
// @match      *://nex-url.cyou/*
// @match      *://arbweb.info/sl/*
// @match      *://cryptofuns.ru/*
// @match      *://hitbits.io/slk/*
// @match      *://getitall.top/f/*
// @match      *://phongcachsao.vn/*
// @match      *://faucethub.ly/hs/*
// @match      *://pentafaucet.com/f/*
// @match      *://starfaucet.net/sl/*
// @match      *://adcrypto.co/claim/*
// @match      *://*.techgeek.digital/*
// @match      *://shrt.cryptofuns.ru/*
// @match      *://cryptonetos.ru/page/*
// @match      *://sohexo.org/kisalink/*
// @match      *://clickscoin.com/short*
// @match      *://toptap.website/short/*
// @match      *://*.adcortoltda.agency/*
// @match      *://*.mediafire.com/file/*
// @match      *://faucet.gold/BTC/?step*
// @match      *://faucet.gold/ETH/?step*
// @match      *://freefeyorra.com/short/*
// @match      *://app.handydecor.com.vn/*
// @match      *://supersites.xyz/verifysl*
// @match      *://cryptotyphoon.com/short/*
// @match      *://waterfaucet.online/short/*
// @match      *://konstantinova.net/verify/*
// @match      *://*.softairbay.com/shortSAB/*
// @match      *://faucetcrypto.com/claim/step/*
// @match      *://*.speedsatoshi.com/lootlinks/*
// @match      *://cryptorotator.website/sh_live/*
// @match      *://*.reddcoineveryday.com/short/*
// @match      *://*.google.com/url?sa=t&rct=j&q*
// @match      *://cryptonetos.ru/page/redirect*
// @match      *://faucetpay.nurul-huda.or.id/*
// @match      *://wp.womenhaircolors.review/*
// @match      *://earnultimate.space/short/*
// ==/UserScript==
// ==========================================================================================================================================
//                                      PLEASE READ SCRIPT INFO BEFORE USE
//                                  PLEASE RESPECT IF MY SCRIPTS USEFUL FOR YOU
//                      DON'T TRY TO COPY PASTE MY SCRIPTS THEN SHARE TO OTHERS LIKE YOU ARE THE CREATOR
//                            PLEASE DON'T REMOVE OR CHANGE MY BLOG, THANKS FOR YOUR SUPPORT
//              My Blog is Very Important to give some Delay for safe away ,Track New Shortlinks , Broken Bypass etc...
// Thanks so much to @JustOlaf , @Konf , @hacker09 for Helping me , make my script even better , and for All who has contributed via Feedback.
// ===========================================================================================================================================
(function() {
    'use strict';
    const bp = query => document.querySelector(query);
    const elementExists = query => bp(query) !== null;
    const domainCheck = domains => new RegExp(domains).test(location.host)
    function click(query) {bp(query).click()}
    function submit(query) {bp(query).submit()}
    function clickIfElementExists(query, timeInSec = 1, funcName = 'setTimeout') {if (elementExists(query)) {window[funcName](function() {click(query);}, timeInSec * 1000);}}
    function Captchasub(query, act = 'submit', timeInSec = 0.5) {if (elementExists(query)) {var timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {bp(query)[act](); clearInterval(timer);}}, timeInSec * 1000);}}
    function Captchaklik(query, act = 'click', timeInSec = 0.5) {if (elementExists(query)) {var timer = setInterval(function() {if (window.grecaptcha && !!window.grecaptcha.getResponse?.()) {bp(query)[act](); clearInterval(timer);}}, timeInSec * 1000);}}
    function redirect(url, blog = false) {location = blog ? 'https://faucetpay.nurul-huda.or.id/?url=' + url : url;}
    function BypassedByBloggerPemula(re_domain, data, blog) { if (!re_domain.test(location.host)) return
        if (typeof data === 'function') return data()
        if (Array.isArray(data)) data = {'/': data}
        if (!(location.pathname in data)) return;
        const [key, value] = data[location.pathname]
        if (typeof key === 'object' && key.test(location.search)) return redirect(value + RegExp.$1, blog)
        const searchParams = new URLSearchParams(location.search);
        if (searchParams.has(key)) redirect(value + searchParams.get(key), blog)}
    function BloggerPemula(domains, data, url, blog, use = null) {const searchParams = new URLSearchParams(location.search);
        if (!domainCheck(domains)) return;
        if (typeof data === 'string' && data.split(',').every(p => searchParams.has(p))) {use ??= data.split(',')[0]
            redirect(url + searchParams.get(use), blog)} else if (typeof data === 'object') {const o = data[location.pathname]
        if (!o) return; BloggerPemula(domains, ...o)}}
    function meta(href) {document.head.appendChild(Object.assign(document.createElement('meta'), { name: 'referrer', content: 'origin'}));
        Object.assign(document.createElement('a'), {href}).click();}
    function waitForElm(query, callback) {setTimeout(function() {if (elementExists(query)) {callback(bp(query))} else {waitForElm(query, callback)}}, 1000)}
    function next(short_id) {fetch('https://sl.lindernman.xyz/s/next', {"headers": {"content-type": "application/json;charset=UTF-8"},
            "body": JSON.stringify({short_id}),
            "method": "POST"})
            .then(res => res.text())
            .then(console.log)}
    function complete(short_id) {fetch('https://sl.lindernman.xyz/s/complete', {"headers": {"content-type": "application/json;charset=UTF-8"},
             "body": JSON.stringify({short_id}),
             "method": "POST"})
            .then(res => res.text())
            .then(data => {redirect(JSON.parse(data))})}
    function notify(txt, width = 850) { const m = document.createElement('div');
             m.style.padding = '10px'; m.style.zIndex = 99999999; m.style.position = 'fixed'; m.style.boxSizing = 'border-box';
             m.style.width = `${width}px`; m.style.top = '130px'; m.style.left = `${innerWidth / 2 - width / 2}px`; m.style.font = 'normal bold 20px sans-serif';
             m.style.backgroundColor = 'white'; m.innerText = txt; document.body.appendChild(m);}
    if(location.host === 'faucetpay.nurul-huda.or.id'){ } else { const listhide = document.querySelectorAll('#frame,#iframe,#particles-js,#canvas,.banner-inner,.floawing-banner,.floating-banner,#wcfloatDiv4,.vanta-canvas,.particles-js-canvas-el,#s65c,#ofc9,#overlay,#footerads,.oulcsy,.blog-item,.sticky-bottom,.separator,html body iframe,html iframe,#cookie-pop,.vmyor,.tnjmvneldp')
    for (const element of listhide) {element.remove()}}
    if(['dutchycorp.space','dutchycorp.ovh'].includes(window.location.hostname) > -1){ var ticker = setInterval(function(){ try{window.grecaptcha.execute(); clearInterval(ticker);} catch(e) {}},3000);}else {}
    // ============================================
    // Captcha Mode
    // ============================================
    Captchasub('#_mform')
    Captchasub('#userForm')
    Captchasub('#link-view')
    Captchasub('#ShortLinkId')
    Captchasub('#lview > form')
    Captchasub('#file-captcha')
    Captchasub('form.text-center')
    Captchasub('#short-captcha-form')
    Captchasub('#wpsafelink-landing')
    Captchasub('.col-12 > form:nth-child(1)')
    Captchasub('.col-md-4 > form:nth-child(1)')
    Captchasub('.contenido > form:nth-child(2)')
    Captchasub('div.row:nth-child(2) > form:nth-child(2)')
    Captchasub('#main > div:nth-child(4) > form:nth-child(1)')
    Captchasub('#showMe > center:nth-child(4) > form:nth-child(1)')
    Captchasub('#showMe > center:nth-child(1) > center:nth-child(4) > form:nth-child(1)')
    Captchasub('#adb-not-enabled > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > div:nth-child(5) > form:nth-child(1)')
    Captchaklik('button#continue.btn.btn-primary.btn-captcha')
    Captchaklik('.m-2.btn-captcha.btn-outline-primary.btn')
    Captchaklik('#yuidea-btn-before.yu-btn.yu-blue')
    Captchaklik('#yuidea-btn-after.yu-blue.yu-btn')
    // ============================================
    // SetTimeout Mode
    // ============================================
    clickIfElementExists('.recaptcha-checkbox-border', 4)
    clickIfElementExists('button#btn6.yu-btn.yu-go', 3)
    clickIfElementExists('.mb-3 > .btn-primary.btn', 3)
    clickIfElementExists('p.getlink', 3)
    clickIfElementExists('.yu-blue.yu-btn', 3)
    clickIfElementExists('button#btn-get-link', 3)
    clickIfElementExists('.fTk7vd > a:nth-child(1)', 3)
    clickIfElementExists('#links > a:nth-child(2)', 3)
    clickIfElementExists('button#showTimerText.btn.btn-accent', 3)
    clickIfElementExists('#wpsafelinkhuman > img:nth-child(1)', 3)
    clickIfElementExists('div.box-main:nth-child(2) > div:nth-child(4) > a:nth-child(1)', 3)
    clickIfElementExists('button#btn6.g-recaptcha.btn.btn-primary', 3)
    clickIfElementExists('button#btn6.btn.btn-outline-primary.btn-captcha.m-2', 3)
    clickIfElementExists('button#submit-button.btn.btn-primary', 3)
    clickIfElementExists('#link1s-snp > button:nth-child(1)', 3)
    clickIfElementExists('button.btn-main.get-link', 3)
    clickIfElementExists('.btn-outline-white.btn', 3)
    clickIfElementExists('button#bt.btn.btn-info.btn-lg', 3)
    clickIfElementExists('button#btn-main.btn.btn-main', 3)
    clickIfElementExists('.exclude-popad.open-continue-btn-org.btn-primary.btn', 3)
    clickIfElementExists('.col-md-8 > form:nth-child(17) > button:nth-child(3)', 3)
    clickIfElementExists('#cl1 > center:nth-child(1) > a:nth-child(1)', 3)
    clickIfElementExists('div#wpsafe-generate a img', 3)
    clickIfElementExists('a.submitBtn.btn.btn-primary', 3)
    clickIfElementExists('button#getlink.getlink.disabled', 3)
    clickIfElementExists('#link1s-snp > button:nth-child(1)', 3)
    clickIfElementExists('#cl1 > a:nth-child(2) > font:nth-child(1)', 3)
    clickIfElementExists('.next-button.btn-lg.text-white.btn-info.btn', 3)
    clickIfElementExists('.next-button.text-white.btn-info.btn', 3)
    clickIfElementExists('button#mdt.custom-btn.btn-7', 3)
    clickIfElementExists('input#btn-main.btn.btn-primary', 3)
    clickIfElementExists('div.complete a.btn', 5)
    clickIfElementExists('div#wpsafe-link a img', 5)
    clickIfElementExists('#molien > a:nth-child(1)', 5)
    clickIfElementExists('a#surl1.btn-main.get-link', 5)
    clickIfElementExists('#wpsafe-snp > a:nth-child(1)', 5)
    clickIfElementExists('.close-ad-modal-go-ahead.close', 5)
    clickIfElementExists('#wpsafe-snp > center:nth-child(1) > a:nth-child(1)', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn-main.get-link', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.ybtn.ybtn-accent-color.btn-captcha', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-outline-primary.btn-lg.btn-block.btn-captcha', 5)
    clickIfElementExists('button#invisibleCaptchaShortlink.btn.btn-primary.btn-goo.btn-captcha', 7)
    clickIfElementExists('button.btn.btn-success', 7)
    clickIfElementExists('div.lds-ellipsis', 9)
    // ============================================
    // setInterval Mode
    // ============================================
    clickIfElementExists('#wg-form > .btnstep1.btn', 1, 'setInterval')
    clickIfElementExists('a#finalx22.btn.btnstep1', 1, 'setInterval')
    clickIfElementExists('#makingdifferenttimer', 1, 'setInterval')
    clickIfElementExists('#myButtonn > span:nth-child(1)', 1, 'setInterval')
    clickIfElementExists('#mdt.btn.btn-primary.text-white.next-button', 1, 'setInterval')
    clickIfElementExists('a.get-link.bg-red-600.px-8.py-2.rounded-md.inline-block', 1, 'setInterval')
    clickIfElementExists('button#main-button.claim-button.btn.btn-lg.btn-accent', 1, 'setInterval')
    clickIfElementExists('input.g-recaptcha.btn.btn-primary', 1, 'setInterval')
    clickIfElementExists('.get-link.ybtn-accent-color.ybtn.btn', 1, 'setInterval')
    clickIfElementExists('.btn-sm.btn-default.btn', 3, 'setInterval')
    clickIfElementExists('#makingdifferenttimer9 > .btn-success.btn', 3, 'setInterval')
    clickIfElementExists('#yuidea-btmbtn', 3, 'setInterval')
    clickIfElementExists('#link1s.btn-primary.btn', 3, 'setInterval')
    clickIfElementExists('a.btn-main.get-link', 3, 'setInterval')
    clickIfElementExists('a.btn.m-2.btn-success', 3, 'setInterval')
    clickIfElementExists('.btn-danger.btn-raised', 3, 'setInterval')
    clickIfElementExists('.close-me > a:nth-child(1)', 3, 'setInterval')
    clickIfElementExists('button.btn-block.btn-success', 3, 'setInterval')
    clickIfElementExists('a.btn.btn-primary.get-link.text-white', 3, 'setInterval')
    clickIfElementExists('div.column:nth-child(2) > font:nth-child(2) > a:nth-child(8)', 1)
    clickIfElementExists('#btn6.btn-captcha.btn-primary.btn', 3, 'setInterval')
    clickIfElementExists('button#link.btn.btn-primary', 3, 'setInterval')
    clickIfElementExists('#go_d', 3, 'setInterval')
    clickIfElementExists('#nextButton', 3, 'setInterval')
    clickIfElementExists('button#get_link.btn.btn-primary.btn-sm', 3, 'setInterval')
    if (elementExists('.tdc_zone')) { setInterval(function() { bp('a.btn-success').click();}, 2000);}
    if (elementExists('#ytimer')) { setInterval(function() { bp('#ytimer > .s-btn-f').click();}, 2000);}
    if (elementExists('#mainlink')) { setInterval(function() { bp('#mainlink > .s-btn-f').click();}, 2000);}
    if (elementExists('#surl')) { setInterval(function() { bp('#surl.btn-success.m-2.btn').click();}, 2000);}
    if (elementExists('#before-captcha')) { setTimeout(function() { document.querySelector('#before-captcha').submit();}, 1000);}
    if (elementExists('#url_qu')) { setTimeout(function() { document.querySelector('.ad-banner.btn-captcha.btn-primary.btn').click();}, 1000);}
    if (elementExists('a#firststep-btn.btn.btnstep1')) { setTimeout(function() { document.querySelector('button#getlink.btn.m-2.btn-success.disabled').click();}, 3000);}
    if (location.host === 'paid4.link') {window.top != window.self} else {clickIfElementExists('.btn-captcha.btn-sm.btn-primary.btn', 5)}
    if (location.host === 'konstantinova.net') {} else {if (elementExists('#makingdifferenttimer')) { setInterval(function() { bp('#url_qu > a:nth-child(1)').click();}, 3000);}}
    if (location.host === 'app.rancah.com') {window.top != window.self} else {clickIfElementExists('input.btn.btn-primary', 5)}
    if (location.host === 'fc-lc.com') {window.top != window.self} else {clickIfElementExists('button#submitbtn.g-recaptcha.btn.btn-primary', 3)}
    if (['nightfallnews.com','fc-lc.com', 'chooyomi.com','zipfy.link','paid4.link','usersdrive.com'].indexOf(location.host) > -1) {window.top != window.self} else {clickIfElementExists('button.btn:nth-child(4)', 2, 'setInterval')}
    if (['coin.mg', 'rancah.com'].indexOf(location.host) > -1) {window.top != window.self} else {if (elementExists('#links')) { setInterval(function() { bp('#links > form:nth-child(2)').submit();}, 3000);}}
    if (['bitlinks.pw','ayelads.com', 'apkadmin.com','cashearn.cc','rancah.com','digitalnaz.net'].indexOf(location.host) > -1) {} else {if (elementExists('div.col-md-4:nth-child(2)')) { setInterval(function() { bp('div.col-md-4:nth-child(2) > span:nth-child(1) > img:nth-child(1)').click();}, 5000);}}
    if (['ctbl.me', 'zshort.cc'].indexOf(location.host) > -1 && location.search === '') {location = 'https://antonimos.de/?url8j=' + location.href}
    if (typeof hcaptcha=="object" && typeof apiCounter=="object") { window.app_country_visitor=""
        window.hcaptcha.getResponse=()=>{}
        window.apiCounter.generateURL()
        window.apiCounter.redirectTo(bp("button.button-element-verification"))}
    if (typeof tokenURL=="string") { redirect(atob(window.tokenURL))}
    waitForElm('div#wpsafe-link > a', function(element) {const regex = /redirect=(.*)',/;
        const m = regex.exec(element.onclick.toString())[1]
        location.href = JSON.parse(atob(m)).safelink})
    let $ = window.jQuery; let respect = ''; // Don't use My Scripts if You Change/Remove My Blogs, Except You Make Donations.
    if (['short.goldenfaucet.io','short.croclix.me','www.adz7short.space','www.shortique.com'].indexOf(location.host) > -1) {function fireMouseEvents(query) { const element = document.querySelector(query);
    if (!element) return; ['mouseover', 'mousedown', 'mouseup', 'click'].forEach(eventName => {if (element.fireEvent) { element.fireEvent('on' + eventName);} else { const eventObject = document.createEvent('MouseEvents');
     eventObject.initEvent(eventName, true, false); element.dispatchEvent(eventObject);}})}
     setInterval(function() { if ($("#link").length > 0) { fireMouseEvents("#link")}}, 500);
     setInterval(function() { if ($("input#continue").length > 0) {fireMouseEvents("input#continue");}
    if ($("a#continue.button").length > 0) {fireMouseEvents("a#continue.button")}}, 9000);
     setTimeout(function() {if ($("#btn-main").length < 0) return; fireMouseEvents("#btn-main")}, 5000);}
    if (location.host === 'upfiles.io') {clickIfElementExists('.get-link.btn-download.btn-primary.btn', 13)} else if (location.host === 'rodjulian.com') {clickIfElementExists('a.btn.btn-primary.btn-lg.get-link', 5, 'setInterval')} else if (elementExists('#go-link')) {$("#go-link").unbind().submit(function(e) {e.preventDefault(); var form = $(this); var url = form.attr('action'); const pesan = form.find('button'); const notforsale = $(".navbar-collapse.collapse");
    const blogger = $(".main-header"); const pemula = $(".col-sm-6.hidden-xs");
    $.ajax({type: "POST", url: url, data: form.serialize(),
    beforeSend: function(xhr) { pesan.attr("disabled", "disabled");
    $('a.get-link').text('Bypassed by Moryata Pro Scipt');
    notforsale.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Moryata Pro Script</b></button>');
    blogger.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Moryata Pro Script</b></button>');
    pemula.replaceWith('<button class="btn btn-default , col-md-12 text-center" onclick="javascript: return false;"><b>Thanks for using Bypass All Shortlinks Scripts and for Donations , Regards : Moryata Pro Script</b></button>');},
    success: function(result, xhr) {location.href=respect+result.url}});});}
    const bas = (h => { const result = { isNotifyNeeded: false, redirectDelay: 0, link: undefined };
    switch (h.host) {case 'faucetpay.nurul-huda.or.id': if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sn')) {
        result.link = h.searchParams.get('url') + '&sn=' + h.searchParams.get('sn').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('sub_id') && h.searchParams.has('site_id') && h.searchParams.has('ip_address')) {
        result.link = h.searchParams.get('url') + '&sub_id=' + h.searchParams.get('sub_id') + '&site_id=' + h.searchParams.get('site_id') + '&ip_address=' + h.searchParams.get('ip_address'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('ssa') && h.searchParams.has('id')) {
        result.link = h.searchParams.get('url') + '&ssa=' + h.searchParams.get('ssa') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('id')) {
        result.link = h.searchParams.get('url') + '&id=' + h.searchParams.get('id').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.searchParams.has('article')) {
        result.link = h.searchParams.get('url') + '&article=' + h.searchParams.get('article').replace('&m=1', ''); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url') && h.href.includes('#')) {
        result.link = h.searchParams.get('url') + $(location).attr('hash'); result.redirectDelay = 5; result.isNotifyNeeded = true; return result;
    } else if (h.pathname === '/' && h.searchParams.has('url')) {
        result.link = h.searchParams.get('url').replace('&m=1', ''); result.redirectDelay = 1; result.isNotifyNeeded = true; return result; } break;
        default: break;}})(new URL(location.href));
    if (bas) { const { isNotifyNeeded, redirectDelay, link } = bas;
    if (isNotifyNeeded) { notify(`Please Wait a moment .....You will be Redirected to Your Destination in ${redirectDelay} seconds`);}
        setTimeout(() => {location.href = link}, redirectDelay * 1000);}
    const l = (h => {const b = h.pathname === '/verify/' && /^\?([^&]+)/.test(h.search); const p = h.pathname === '/' && h.searchParams.has('link');
    switch (h.host) {case 'okrzone.com': if (b) { meta('https://gtlink.co/' + RegExp.$1);} break;
    case 'nawahi1.com': if (b) { meta('https://sh2rt.com/' + RegExp.$1)} break;
    case 'ezimg.co': if (b) { meta('https://final.pay4url.com/' + RegExp.$1)} break;
    case 'fx4vip.com': bp('div.col-md-12:nth-child(2) > a:nth-child(10)').click(); break;
    case 'medipost.org': if (b) { meta('https://links.medipost.org/' + RegExp.$1)} break;
    case 'ledifha.com': if (b) { meta('https://process.ledifha.com/' + RegExp.$1)} break;
    case 'urlily.com': if (b) { meta('https://shorturl.sh2rt.com/' + RegExp.$1);} break;
    case 'adinsurance.xyz': if (b) { meta('https://blog.adinsurance.xyz/' + RegExp.$1)}break;
    case 'url.magmint.com': if (b) { meta('https://bell.healthyguy.online/' + RegExp.$1)} break;
    case 'speedynews.xyz': if (b) { meta('https://additionalgamer.com/blog/' + RegExp.$1)} break;
    case 'techrayzer.com': if (b) { meta('https://techrayzer.com/insurance/' + RegExp.$1)} break;
    case 'faucethub.ly': if (/^\/hs\/\/([^\/]+)/.test(h.pathname)) {return 'https://goads.ly/' + RegExp.$1;}break;
    case 'cekip.site': case 'www.cekip.site': if (/^\/go\/([^\/]+)/.test(h.pathname)) { meta(atob(RegExp.$1))} break;
    case 'www.hostingviral.live': case 'www.apk4do.com': if (b) { meta('https://www.dineroshare.com/' + RegExp.$1)} break;
    case 'linkstom.ml': if (p) { meta('https://links.earnfort.in/' + decodeURIComponent(h.searchParams.get('link')))} break;
    case 'madar-24.com': if (p) {meta('https://coupon-fresh.com/' + decodeURIComponent(h.searchParams.get('link')))} break;
    case 'studyuo.com': if (h.pathname === '/pro2/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://csd.xmod.in/' + RegExp.$1);} break;
    case 'hosting4lifetime.com': if (h.pathname === '/blog/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://abcshort.com/' + RegExp.$1);} break;
    case 'techmody.io': if (h.pathname === '/' && h.searchParams.has('check')) { meta(decodeURIComponent(h.searchParams.get('check')));} break;
    case 'www.gkqnaexam.com': if (/^\/yuidea\/$/.test(h.pathname) && /^\?([^&]+)/.test(h.search)) { meta('https://web.url2link.com/' + RegExp.$1);} break;
    case 'blog.crazyblog.in': if (/^\/step\d+?\/([^/]+)$/.test(h.pathname)) {return 'https://wplink.online/' + RegExp.$1;} else if (/^\/visit\d+?\/step\d+?\/([^/]+)$/.test(h.pathname)) {return 'https://cblink.crazyblog.in/' + RegExp.$1;}break;
    case 'www.gifans.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://shortlink.prz.pw/' + RegExp.$1;}break;
    case 'coinbaze.in': case 'techmart4u.in': if (/^\/coinbazeads\/([^\/]+)/.test(h.pathname)) {return 'https://urlfiles.com/' + RegExp.$1;}break;
    case 'anime.dutchycorp.space': case 'movies.dutchycorp.space': case 'tech.dutchycorp.space': case 'cool-time.dutchycorp.space':
        if (/^\/redir[^.]+?\.php$/.test(h.pathname) && h.searchParams.has('code')) {return h.searchParams.get('code') + '?verif=0';}break;
    case 'clickscoin.com': if (/^\/short\/([^/]+)/.test(h.pathname)) { return 'https://short.clickscoin.com/' + RegExp.$1;
         } else if (/^\/shortccsl\/([^/]+)/.test(h.pathname)) { return 'https://ccsl.xyz/' + RegExp.$1;} break;
    case 'dogeclick.net': if (/^\/short\/([^/]+)/.test(h.pathname)) {return 'https://short.clickscoin.com/' + RegExp.$1;
        } else if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
    case 'short.clickscoin.com': case 'watchdoge.xyz': case 'dogeclick.net': if (/^\/ccsl\/([^/]+)/.test(h.pathname)) {return 'https://ccsl.xyz/' + RegExp.$1;}break;
    case 'crypto-faucet.xyz': if (/^\/bitco\/link\/([^\/]+)/.test(h.pathname)) {return 'https://doctor-groups.com/link/' + RegExp.$1;}break;
    case 'faucet.100count.net': if (/^\/fo\/linko\/([^\/]+)/.test(h.pathname)) {return 'https://100count.net/fo/linko/' + RegExp.$1;
        } else if (/^\/clickit\/sh\/([^/]+)/.test(h.pathname)) {return 'https://100count.net/fileo/clicksfile/stats/' + RegExp.$1;}break;
    case 'adoco.in': if (/girl([mpwz])oro\/([^\/]+)/.test(h.pathname)) { return 'https://girl' + RegExp.$1 + 'oro.xyz/' + RegExp.$2;}break;
    case 'network-earn.online': if ( h.searchParams.has('tok') && h.href.includes('index.php') ) { return 'https://luckybits.online/check.php?tok=' + h.searchParams.get('tok'); } break;
    case 'fexkomin.xyz': if (h.pathname === '/go.php' && h.searchParams.has('link')) { return 'https://shortfex.com/' + h.searchParams.get('link').substring(1);} break;
    case 'kiiw.icu': if (h.pathname === '/check.php' && h.searchParams.has('alias')&& h.searchParams.has('wis')&& h.searchParams.has('siw')){ return 'https://kiiw.icu/' + h.searchParams.get('alias')+ '?wis=' + h.searchParams.get('wis')+ '&siw=' + h.searchParams.get('siw');} break;
    case 'shrinkearn.com': case 'clk.sh': var l = new URL(window.location.href); if (l.href.includes('bloogerspoot.') && l.searchParams.has('url')) {let i = new URL(l.searchParams.get('url'));
         window.location.assign('https://softindex.website'+i.pathname);} break;
    case 'acortame.xyz': if (window.location.hash) {location.href ="https://faucetpay.nurul-huda.or.id/?url="+(atob(window.location.hash.substr(1)))} break;
    case 'newsharsh.com': if (h.pathname === '/english/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://studyuo.com/pro2/verify/?' + RegExp.$1);} break;
    case 'crazyblog.in': case 'www.crazyblog.in': if (h.pathname === '/xhod/verify/' && /^\?([^&]+)/.test(h.search)) { meta('https://redd.crazyblog.in/' + RegExp.$1);} break;
    case 'sl.easysl.click': if (/^\/step1\/([^\/]+)/.test(h.pathname)) {return 'https://easysl.click/' + RegExp.$1;}break;
    case 'step0.shortlinks.click': if (/^\/([^\/]+)/.test(h.pathname)) { return 'https://shortlinks.click/' + RegExp.$1; } break;
    case 'earnfree.cc': if (/^\/slc\/step1\/([^/]+)/.test(h.pathname)) { return 'http://shortlinks.click/' + RegExp.$1; } break;
    case 'zonearn.biz': if (/^\/(.+)/.test(h.pathname) && h.searchParams.has('tok')) {return h.searchParams.get('tok');}break;
    case 'nulledsafe.com': if (/^\/link\/([^\/]+)/.test(h.pathname)) {return 'https://golink.nulledsafe.com/' + RegExp.$1;}break;
    case 'coinsearns.com': if (/^\/cryptoads\/([^/]+)/.test(h.pathname)) {return 'https://cryptoads.space/' + RegExp.$1;}break;
    default: break;} })(new URL(location.href)); if (l) {location.href = l; }
    BypassedByBloggerPemula(/mediafire.com/, function() {var bass; var md = function closeWindows(){window.close(); clearInterval(bass);};
    var mf = bp('.download_link .input').getAttribute('href'); console.log(mf)
    location.replace(mf); bass = setInterval(md, 1000 * 1);})
    BypassedByBloggerPemula(/nathanaeldan.pro|freddyoctavio.pro/, function() { var urls = new URL(document.URL); var dest = urls.searchParams.get("dest"); var decoded = decodeURI(dest)
    redirect(decoded);})
    BypassedByBloggerPemula(/tei.ai/, function() {window.addEventListener('DOMContentLoaded', (event) => {var linkbypass = atob(`aH${bp("#link-view [name='token']").value.split("aH").slice(1).join("aH")}`);
    redirect(linkbypass);});})
    BypassedByBloggerPemula(/anonym.ninja/, function() {var fd = window.location.href.split('/').slice(-1)[0]
    redirect(`https://anonym.ninja/download/file/request/${fd}`)})
    BypassedByBloggerPemula(/btcpany.com|crewbase.net|crewus.net|faucet.work|techlearningtube.in|wildblog.me|bitzite.com|bebodybuilder.com|thumb8.net|thumb9.net|allcryptoz.net|jiotech.net|topcryptoz.net|ultraten.net|uniqueten.net|technoflip.in|studyranks.in|brixarena.tech|saqercoin.xyz|crypto-blog.xyz|crypto4tun.com|mcrypto.club|mrsaifi.xyz|manthans.in|dogeearn.com|99faucet.com/, function() {var el = document.querySelector("input[name=newwpsafelink]")
    redirect(JSON.parse(atob(el.value)).linkr)})
    BypassedByBloggerPemula(/shinchu.net|shinbhu.net|riadblog.com|riadcrypto.com|donia2tech.com|www.cgyojna.com/, function() {var form = document.getElementById('wpsafelink-landing')
    redirect(JSON.parse(atob(form.newwpsafelink.value)).linkr)})
    BypassedByBloggerPemula(/getitall.top|pentafaucet.com/, function() {const short_id = location.pathname.split('/')[2];
    next(short_id)
    setTimeout(function() {complete(short_id)}, 4000)})
    BypassedByBloggerPemula(/hitbits.io/, function() {const short_id = location.pathname.split('/')[3];
    next(short_id)
    setTimeout(function() {complete(short_id)}, 4000)})
    BypassedByBloggerPemula(/7apple.net/, ['go', 'https://illink.net/'], false)
    const re = new RegExp(/^\?([^&]+)/);
    BypassedByBloggerPemula(/crazyblog.in/, { '/finance/': ['link', 'https://shrinkpay.crazyblog.in'],
    '/hars/verify/': [re, 'https://redd.crazyblog.in'], '/harsh/verify/': [re, 'https://studyuo.com/pro2/verify/?'],}, false)
    BypassedByBloggerPemula(/studyuo.com/, {'/pro/': ['link', 'https://shrinkpay.crazyblog.in'],
    '/short/verify/': [re, 'https://redd.crazyblog.in'], '/blog/verify/': [re, 'https://speedynews.xyz/verify/?'],}, false)
    BloggerPemula('tr.link', 'url,api', '', false)
    BloggerPemula('sport4you.net', 'link', '', false)
    BloggerPemula('crazyblog.in', 'postid', '', false)
    BloggerPemula('claimfey.com', 'link', 'https://link3s.net/', false)
    BloggerPemula('wpking.in', 'link', 'https://o.ovlinks.com/', false)
    BloggerPemula('apasih.my.id', 'link', 'https://go.gets4link.com/', false)
    BloggerPemula('takez.co', 'token', 'https://links.spidermods.in/', false);
    BloggerPemula('tech.digitalnaz.net', 'getlink', 'https://go.coinadfly.com/', false)
    BloggerPemula('digiromotion.com|visflakes.com', 're', 'https://zipfy.link/', false)
    BloggerPemula('exe.io|birdurls.com|dash-free.com|owllink.net', 'url,api', 'https://', false)
    BloggerPemula('crickblaze.com|blog.digitalnaz.net', 'getlink', 'https://go.linkres.in/', false)
    BloggerPemula('coin-free.com|kienthucrangmieng.com|coindoog.com|tieutietkiem.com|askpaccosi.com', 'wpsafelink', '', false);
    BypassedByBloggerPemula(/adfoc.us/, function() { bp('.skip').click();})
    BypassedByBloggerPemula(/ouo.today/, function() {location.href = nextUrl;})
    BypassedByBloggerPemula(/prx.ee/, function() { bp('#final_link').click();})
    BypassedByBloggerPemula(/1ink.cc/, function() { bp('#countingbtn').click();})
    BypassedByBloggerPemula(/1link.club/, function() { bp('#download').click();})
    BypassedByBloggerPemula(/up-load.one/, function() { bp('#submitbtn').click();})
    BypassedByBloggerPemula(/stfly.me/, function() { bp('#submit_data').submit();})
    BypassedByBloggerPemula(/supersites.xyz/, {'/verifysl.php': ['url', ''],}, false)
    BypassedByBloggerPemula(/modebaca.com/, function() { bp('.btn-success.btn').click();})
    BypassedByBloggerPemula(/adsy.pw|linkpay.cc/, function() { bp('#link-view').submit();})
    BypassedByBloggerPemula(/send.cm/, function() {clickIfElementExists('#downloadbtn', 1)})
    BypassedByBloggerPemula(/jameeltips.us/, function() { bp('#continue_button_1').click();})
    BypassedByBloggerPemula(/shortit.pw/, function() { bp('.pulse.btn-primary.btn').click();})
    BypassedByBloggerPemula(/esenr.com/, {'/': ['link', 'https://go.bcdshort.xyz/'],}, false)
    BypassedByBloggerPemula(/netfile.cc/, {'/': ['link', 'https://next.netfile.cc/'],}, false)
    BypassedByBloggerPemula(/makemoneywithurl.com/, function() { bp('#hidden form').submit();})
    BypassedByBloggerPemula(/zippyshare.com/, function() {clickIfElementExists('#dlbutton', 3)})
    BypassedByBloggerPemula(/hexupload.net/, function() {bp('.btn-success.btn-lg.btn').click();})
    BypassedByBloggerPemula(/ashort1a.xyz|ashort2a-bro.tk/, function() { bp('#proceed').click();})
    BypassedByBloggerPemula(/theconomy.me/, {'/': ['link', 'https://link.theconomy.me/'],}, false)
    BypassedByBloggerPemula(/amazingdarpon.com/, {'/': ['link', 'https://go.zolomix.in/'],}, false)
    BypassedByBloggerPemula(/oyunzak.com|gazianteppetektemizleme.net/, {'/': ['link', ''],}, false)
    BypassedByBloggerPemula(/automotur.club|sanoybonito.club/, function() { bp('#page2').submit();})
    BypassedByBloggerPemula(/forex-trnd.com|gawbne.com/, function() { bp('#exfoary-form').submit();})
    BypassedByBloggerPemula(/wiki-topia.com/, {'/': ['link', 'https://cryptowidgets.net/sl/'],}, false)
    BypassedByBloggerPemula(/technicalramno1.link/, {'/': ['link', 'https://go.urlmoney.xyz/'],}, false)
    BypassedByBloggerPemula(/usersdrive.com/, function() {clickIfElementExists('.btn-download.btn', 1)})
    BypassedByBloggerPemula(/lux.adinsurance.xyz/, {'/': ['link', 'https://go.adinsurance.xyz/'],}, false)
    BypassedByBloggerPemula(/go.insurglobal.xyz/, {'/': ['link', 'https://link.insurglobal.xyz/'],}, false)
    BypassedByBloggerPemula(/toptap.website/, function() {clickIfElementExists('#cl1 > a:nth-child(1)', 3)})
    BypassedByBloggerPemula(/cutt.net/, function() {clickIfElementExists('#submit-button', 3, 'setInterval')})
    BypassedByBloggerPemula(/infinityfreescripts.xyz/, {'/': ['link', 'https://technologylover.in/'],}, false)
    BypassedByBloggerPemula(/adcortoltda.agency/, {'/': ['link', 'https://link.adcortoltda.agency/'],}, false)
    BypassedByBloggerPemula(/appsbull.com/, {'/index_blog.php': ['id', 'https://blog.adlink.click/'],}, false)
    BypassedByBloggerPemula(/claimclicks.com/, {'/blog/': ['link', 'https://claimclicks.com/short/'],}, false)
    BypassedByBloggerPemula(/lootlinks.xyz/, function() {clickIfElementExists('#get-link', 5, 'setInterval')})
    BypassedByBloggerPemula(/techgeek.digital/, function() { bp('.text-center > form:nth-child(4)').submit();})
    BypassedByBloggerPemula(/insuranceblog.xyz/, {'/blog/': ['link', 'https://gos.insuranceblog.xyz/']}, false)
    BypassedByBloggerPemula(/insurance-space.xyz/, {'/': ['link', 'https://link.insurance-space.xyz/'],}, false)
    BypassedByBloggerPemula(/link.linksfire.co/, function() {location = location.href.replace('link', 'blog');})
    BypassedByBloggerPemula(/fexkomin.xyz/, function() {clickIfElementExists('.btn-captcha.btn-danger.btn', 3)})
    BypassedByBloggerPemula(/techload.co|largestpanel.in|earn.largestpanel.in/, function() { bp('#tp-snp2').click();})
    BypassedByBloggerPemula(/intercelestial.com|tribuntekno.com|101desire.com/, function() { bp('#landing').submit();})
    BypassedByBloggerPemula(/go.birdurls.com|go.owllink.net/, function() {location = location.href.replace('go.', '');})
    BypassedByBloggerPemula(/informaxonline.com|gaminplay.com/, {'/': ['link', 'https://go.adslinkfly.online/'],}, false)
    BypassedByBloggerPemula(/mynewsmedia.co/, function() {clickIfElementExists('.file-download-btn.btn-primary.btn', 3)})
    BypassedByBloggerPemula(/bcvc.xyz/, function() {clickIfElementExists('.js-scroll-trigger.btn-xl.btn-outline.btn', 6)})
    BypassedByBloggerPemula(/foodyrecipe.xyz|delishwell.com|artiskini.com/, {'/': ['link', 'https://paid4.link/'],}, false)
    BypassedByBloggerPemula(/forex-articles.com|forexlap.com|forexmab.com/, function() { bp('.oto > a:nth-child(1)').click();})
    BypassedByBloggerPemula(/app.rancah.com/, function() {clickIfElementExists('.get-link.btn-lg.btn-success.btn', 5, 'setInterval')})
    BypassedByBloggerPemula(/cooklike.info|mercedesellington.com|model-tas-terbaru.com/, {'/': ['link', 'https://yousm.link/'],}, false)
    BypassedByBloggerPemula(/xervoo.net|hurirk.net|usfinf.net|eloism.net/, function() { bp('#adReporter > form:nth-child(2)').submit();})
    BypassedByBloggerPemula(/wrbloggers.com/, function() {clickIfElementExists('.btn-danger.btn-block.btn', 3); bp('#nextpagelink').submit();})
    BypassedByBloggerPemula(/cashearn.cc|bitlinks.pw/, function() {clickIfElementExists('.next-button.btn-lg.btn-info.btn', 3, 'setInterval')})
    BypassedByBloggerPemula(/marocclickers.xyz/, function() { bp('#link-view > div:nth-child(5) > center:nth-child(5) > div:nth-child(1)').click();})
    BypassedByBloggerPemula(/blogginglass.com/, {'/': ['getlink', 'http://go.mozlink.net/'],'/blog/': ['getlink', 'http://go.fire-link.net/']}, false)
    BypassedByBloggerPemula(/uploadev.org/, function() {clickIfElementExists('#dspeed > input:nth-child(3)', 1); clickIfElementExists('.directl', 1)})
    BypassedByBloggerPemula(/wp.sekilastekno.com/, function() {clickIfElementExists('div > div > button', 3, 'setInterval') ; bp('#btget > form').submit();})
    BypassedByBloggerPemula(/uptobox.com/, function() {clickIfElementExists('a.big-button-green:nth-child(1)', 2); clickIfElementExists('.download-btn', 3, 'setInterval')})
    BypassedByBloggerPemula(/apkadmin.com/, function() {clickIfElementExists('.text > a:nth-child(4) > img:nth-child(1)', 1);bp('.download-file-button > form:nth-child(1)').submit();})
})();