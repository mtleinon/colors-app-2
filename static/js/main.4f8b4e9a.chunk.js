(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{282:function(e,a,t){e.exports=t.p+"static/media/listBackground.88c4fc0e.svg"},310:function(e,a,t){e.exports=t(717)},315:function(e,a,t){},716:function(e,a,t){},717:function(e,a,t){"use strict";t.r(a);var o,n,r=t(0),l=t.n(r),c=t(10),i=t.n(c),s=t(37),m=(t(315),t(69)),u=t(24),d=t(23),p=t(26),h=t(25),f=t(27),g=t(68),b=t(720),v=t(719),C=t(32),E=t(12),w=t(275),x=t(4),y=t.n(x),j=t(33),O=t.n(j),S=function(e){return"@media (max-width: ".concat({xs:"575.98px",sm:"767.98px",md:"991.98px",lg:"1199.98px",xl:"1399.98px"}[e],")")},k={colorBox:(o={width:"20%",height:function(e){return e.showFullPalette?"25%":"50%"},display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4px","&:hover button":{opacity:"1"}},Object(E.a)(o,S("lg"),{width:"25%",height:function(e){return e.showFullPalette?"20%":"33%"}}),Object(E.a)(o,S("md"),{width:"50%",height:function(e){return e.showFullPalette?"10%":"20%"}}),Object(E.a)(o,S("xs"),{width:"100%",height:function(e){return e.showFullPalette?"5%":"10%"}}),o),copyText:{color:function(e){return O()(e.color).luminance()<.3?"white":"black"}},colorName:{color:function(e){return O()(e.color).luminance()<.3?"white":"black"}},seeMore:{color:function(e){return O()(e.color).luminance()<.3?"white":"black"},background:function(e){return O()(e.color).luminance()<.3?"rgba(255,255,255,.2)":"rgba(0,0,0,.1)"},position:"absolute",right:"0",bottom:"0",width:"60px",height:"30px",textAlign:"center",lineHeight:"30px",textTransform:"uppercase"},copyButton:{color:function(e){return O()(e.color).luminance()<.3?"white":"black"},background:function(e){return O()(e.color).luminance()<.3?"rgba(255,255,255,.2)":"rgba(0,0,0,.1)"},width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",cursor:"pointer",textDecoration:"none",opacity:"0"},boxContent:{position:"absolute",width:"100%",left:"0",bottom:"0",padding:"10px",color:"black",letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px"},copyOverlay:{opacity:"0",zIndex:"0",width:"100%",height:"100%",transform:"scale(.1)",transition:"transform 0.6s ease-in-out"},showOverlay:{opacity:"1",transform:"scale(50)",zIndex:"10",position:"absolute"},copyMsg:{position:"fixed",left:"0",right:"0",top:"0",bottom:"0",display:"flex",alignItems:"center",justifyContent:"center",flexDirection:"column",fontSize:"4rem",transform:"scale(.1)",opacity:"0",color:function(e){return O()(e.color).luminance()<.08?"white":"black"},background:function(e){return O()(e.color).luminance()<.08?"rgba(255,255,255,.2)":"rgba(0,0,0,.1)"},"& h1":Object(E.a)({fontWeight:"400",textShadow:"1px 2px black",background:"rgba(255,255,255, 0.2)",width:"100%",textAlign:"center",marginBottom:"0",padding:"1rem",textTransform:"uppercase"},S("xs"),{fontSize:"6rem"}),"& p":{fontSize:"2rem",fontWeight:"100"}},showMessage:{opacity:"1",transform:"scale(1)",zIndex:"25",transition:"all 0.4s ease-in-out",transitionDelay:"0.3s"}},N=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).changeCopyState=function(){t.setState({copied:!0},function(){setTimeout(function(){return t.setState({copied:!1})},1500)})},t.state={copied:!1},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.name,t=e.color,o=e.moreUrl,n=e.showLink,r=e.classes,c=this.state.copied;return l.a.createElement(w.CopyToClipboard,{text:t,onCopy:this.changeCopyState},l.a.createElement("div",{style:{background:t},className:r.colorBox},l.a.createElement("div",{style:{background:t},className:y()(r.copyOverlay,Object(E.a)({},r.showOverlay,c))}),l.a.createElement("div",{className:y()(r.copyMsg,Object(E.a)({},r.showMessage,c))},l.a.createElement("h1",null,"Copied!"),l.a.createElement("p",null,t)),l.a.createElement("div",null,l.a.createElement("div",{className:r.boxContent},l.a.createElement("span",{className:r.colorName},a)),l.a.createElement("button",{className:r.copyButton},"Copy")),n&&l.a.createElement(s.b,{to:o,onClick:function(e){return e.stopPropagation()}},l.a.createElement("span",{className:r.seeMore},"More"))))}}]),a}(r.Component),P=Object(C.a)(k)(N),B=t(184),F=t.n(B),D=t(131),A=t.n(D),I=t(281),L=t.n(I),R=t(82),T=t.n(R),G=t(127),M=t.n(G),z=t(299),U=(t(415),{Navbar:{display:"flex",alignItems:"center",justifyContent:"flex-start",height:"6vh"},logo:Object(E.a)({marginRight:"15px",padding:"0 13px",fontSize:"22px",backgroundColor:"#eceff1",fontFamily:"Roboto', sans-serif",height:"100%",display:"flex","& a":{textDecoration:"none",color:"black",alignSelf:"center"}},S("xs"),{fontSize:"12px","& a::first-letter":{fontSize:"200%",textTransform:"uppercase"}}),level:{marginLeft:"10px"},slider:(n={width:"340px",margin:"0 10px",display:"inline-block","& .rc-slider-rail":{height:"8px"},"& .rc-slider-track":{backgroundColor:"transparent"},"& .rc-slider-handle, .rc-slider-handle:active, .rc-slider-handle:focus, .rc-slider-handle:hover":{backgroundColor:"green",outline:"none",border:"2px solid green",boxShadow:"none",width:"13px",height:"13px",marginLeft:"-7px",marginTop:"-3px"}},Object(E.a)(n,S("md"),{width:"145px"}),Object(E.a)(n,S("xs"),{width:"50px"}),n),selectContainer:{margin:"0 1rem 0 auto"}}),H=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).closeSnackbar=function(){t.setState({snackBarOpen:!1})},t.changeFormat=function(e){t.setState({snackBarOpen:!0}),t.props.changeFormat(e.target.value)},t.state={snackBarOpen:!1},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.format,t=e.level,o=e.changeLevel,n=e.showLevelSlider,r=e.classes;return l.a.createElement("header",{className:r.Navbar},l.a.createElement("div",{className:r.logo},l.a.createElement(s.b,{to:"/"},"reactcolorpicker")),n&&l.a.createElement("div",null,l.a.createElement("span",{className:r.level},"Level: ",t),l.a.createElement("div",{className:r.slider},l.a.createElement(z.a,{defaultValue:t,min:100,max:900,step:100,onAfterChange:o}))),l.a.createElement("div",{className:r.selectContainer},l.a.createElement(F.a,{value:a,onChange:this.changeFormat},l.a.createElement(A.a,{value:"hex"},"HEX - #ffffffff"),l.a.createElement(A.a,{value:"rgb"},"RGB - rgb(255,255,255)"),l.a.createElement(A.a,{value:"rgba"},"RGBA - rgba(255,255,255,1.0)"))),l.a.createElement(L.a,{anchorOrigin:{vertical:"bottom",horizontal:"left"},open:this.state.snackBarOpen,autoHideDuration:3e3,message:l.a.createElement("span",{id:"message-id"},"Format Changed to ",a.toUpperCase()),ContentProps:{"aria-describedby":"message-id"},onClose:this.closeSnackbar,action:[l.a.createElement(T.a,{onClick:this.closeSnackbar,color:"inherit",key:"close","aria-label":"close"},l.a.createElement(M.a,null))]}))}}]),a}(r.Component),W=Object(C.a)(U)(H);var q,V,J=Object(C.a)({PaletteFooter:{backgroundColor:"white",height:"5vh",display:"flex",justifyContent:"flex-end",alignItems:"center",fontWeight:"bold"},emoji:{fontSize:"1.5rem",margin:"0 1rem"}})(function(e){var a=e.paletteName,t=e.emoji,o=e.classes;return l.a.createElement("footer",{className:o.PaletteFooter},a,l.a.createElement("span",{className:o.emoji},t))}),Y=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).changeLevel=function(e){t.setState({level:e})},t.changeFormat=function(e){t.setState({format:e})},t.state={level:500,format:"hex"},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props.palette,a=e.colors,t=e.paletteName,o=e.emoji,n=e.id,r=this.props.classes,c=this.state,i=c.format,s=c.level,m=a[s].map(function(e){return l.a.createElement(P,{color:e[i],key:e.name,name:e.name,moreUrl:"/palette/".concat(n,"/").concat(e.id),showLink:!0,showFullPalette:!0})});return l.a.createElement("div",{className:r.palette},l.a.createElement(W,{showLevelSlider:!0,format:i,level:s,changeFormat:this.changeFormat,changeLevel:this.changeLevel}),l.a.createElement("div",{className:r.paletteColors},m),l.a.createElement(J,{paletteName:t,emoji:o}))}}]),a}(r.Component),K=Object(C.a)({palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"90%"}})(Y),_=[{paletteName:"Material UI Colors",id:"material-ui-colors",emoji:"\ud83c\udfa8",colors:[{name:"red",color:"#F44336"},{name:"pink",color:"#E91E63"},{name:"purple",color:"#9C27B0"},{name:"deeppurple",color:"#673AB7"},{name:"indigo",color:"#3F51B5"},{name:"blue",color:"#2196F3"},{name:"lightblue",color:"#03A9F4"},{name:"cyan",color:"#00BCD4"},{name:"teal",color:"#009688"},{name:"green",color:"#4CAF50"},{name:"lightgreen",color:"#8BC34A"},{name:"lime",color:"#CDDC39"},{name:"yellow",color:"#FFEB3B"},{name:"amber",color:"#FFC107"},{name:"orange",color:"#FF9800"},{name:"deeporange",color:"#FF5722"},{name:"brown",color:"#795548"},{name:"grey",color:"#9E9E9E"},{name:"bluegrey",color:"#607D8B"},{name:"bluegrey2",color:"#607D8B"}]},{paletteName:"Flat UI Colors v1",id:"flat-ui-colors-v1",emoji:"\ud83e\udd19",colors:[{name:"Turquoise",color:"#1abc9c"},{name:"Emerald",color:"#2ecc71"},{name:"PeterRiver",color:"#3498db"},{name:"Amethyst",color:"#9b59b6"},{name:"WetAsphalt",color:"#34495e"},{name:"GreenSea",color:"#16a085"},{name:"Nephritis",color:"#27ae60"},{name:"BelizeHole",color:"#2980b9"},{name:"Wisteria",color:"#8e44ad"},{name:"MidnightBlue",color:"#2c3e50"},{name:"SunFlower",color:"#f1c40f"},{name:"Carrot",color:"#e67e22"},{name:"Alizarin",color:"#e74c3c"},{name:"Clouds",color:"#ecf0f1"},{name:"Concrete",color:"#95a5a6"},{name:"Orange",color:"#f39c12"},{name:"Pumpkin",color:"#d35400"},{name:"Pomegranate",color:"#c0392b"},{name:"Silver",color:"#bdc3c7"},{name:"Asbestos",color:"#7f8c8d"}]},{paletteName:"Flat UI Colors Dutch",id:"flat-ui-colors-dutch",emoji:"\ud83c\uddf3\ud83c\uddf1",colors:[{name:"Sunflower",color:"#FFC312"},{name:"Energos",color:"#C4E538"},{name:"BlueMartina",color:"#12CBC4"},{name:"LavenderRose",color:"#FDA7DF"},{name:"BaraRose",color:"#ED4C67"},{name:"RadiantYellow",color:"#F79F1F"},{name:"AndroidGreen",color:"#A3CB38"},{name:"MediterraneanSea",color:"#1289A7"},{name:"LavenderTea",color:"#D980FA"},{name:"VerryBerry",color:"#B53471"},{name:"PuffinsBill",color:"#EE5A24"},{name:"PixelatedGrass",color:"#009432"},{name:"MerchantMarineBlue",color:"#0652DD"},{name:"ForgottenPurple",color:"#9980FA"},{name:"HollyHock",color:"#833471"},{name:"RedPigment",color:"#EA2027"},{name:"TurkishAqua",color:"#006266"},{name:"20000LeaguesUnderTheSea",color:"#1B1464"},{name:"CircumorbitalRing",color:"#5758BB"},{name:"MagentaPurple",color:"#6F1E51"}]},{paletteName:"Flat UI Colors American",id:"flat-ui-colors-american",emoji:"\ud83c\uddfa\ud83c\uddf8",colors:[{name:"LightGreenishBlue",color:"#55efc4"},{name:"FadedPoster",color:"#81ecec"},{name:"GreenDarnerTail",color:"#74b9ff"},{name:"ShyMoment",color:"#a29bfe"},{name:"CityLights",color:"#dfe6e9"},{name:"MintLeaf",color:"#00b894"},{name:"RobinsEggBlue",color:"#00cec9"},{name:"ElectronBlue",color:"#0984e3"},{name:"ExodusFruit",color:"#6c5ce7"},{name:"SoothingBreeze",color:"#b2bec3"},{name:"SourLemon",color:"#ffeaa7"},{name:"FirstDate",color:"#fab1a0"},{name:"PinkGlamour",color:"#ff7675"},{name:"Pico8Pink",color:"#fd79a8"},{name:"AmericanRiver",color:"#636e72"},{name:"BrightYarrow",color:"#fdcb6e"},{name:"OrangeVille",color:"#e17055"},{name:"Chi-Gong",color:"#d63031"},{name:"PrunusAvium",color:"#e84393"},{name:"DraculaOrchid",color:"#2d3436"}]},{paletteName:"Flat UI Colors Aussie",id:"flat-ui-colors-aussie",emoji:"\ud83c\udde6\ud83c\uddfa",colors:[{name:"Beekeeper",color:"#f6e58d"},{name:"SpicedNectarine",color:"#ffbe76"},{name:"PinkGlamour",color:"#ff7979"},{name:"JuneBud",color:"#badc58"},{name:"CoastalBreeze",color:"#dff9fb"},{name:"Turbo",color:"#f9ca24"},{name:"QuinceJelly",color:"#f0932b"},{name:"CarminePink",color:"#eb4d4b"},{name:"PureApple",color:"#6ab04c"},{name:"HintOfIcePack",color:"#c7ecee"},{name:"MiddleBlue",color:"#7ed6df"},{name:"Heliotrope",color:"#e056fd"},{name:"ExodusFruit",color:"#686de0"},{name:"DeepKoamaru",color:"#30336b"},{name:"SoaringEagle",color:"#95afc0"},{name:"GreenlandGreen",color:"#22a6b3"},{name:"SteelPink",color:"#be2edd"},{name:"Blurple",color:"#4834d4"},{name:"DeepCove",color:"#130f40"},{name:"WizardGrey",color:"#535c68"}]},{paletteName:"Flat UI Colors British",id:"flat-ui-colors-british",emoji:"\ud83c\uddec\ud83c\udde7",colors:[{name:"ProtossPylon",color:"#00a8ff"},{name:"Periwinkle",color:"#9c88ff"},{name:"Rise-N-Shine",color:"#fbc531"},{name:"DownloadProgress",color:"#4cd137"},{name:"Seabrook",color:"#487eb0"},{name:"VanaDylBlue",color:"#0097e6"},{name:"MattPurple",color:"#8c7ae6"},{name:"NanohanachaGold",color:"#e1b12c"},{name:"SkirretGreen",color:"#44bd32"},{name:"Naval",color:"#40739e"},{name:"NasturcianFlower",color:"#e84118"},{name:"LynxWhite",color:"#f5f6fa"},{name:"BlueberrySoda",color:"#7f8fa6"},{name:"MazarineBlue",color:"#273c75"},{name:"BlueNights",color:"#353b48"},{name:"HarleyOrange",color:"#c23616"},{name:"HintOfPensive",color:"#dcdde1"},{name:"ChainGangGrey",color:"#718093"},{name:"PicoVoid",color:"#192a56"},{name:"ElectroMagnetic",color:"#2f3640"}]},{paletteName:"Flat UI Colors Spanish",id:"flat-ui-colors-spanish",emoji:"\ud83c\uddea\ud83c\uddf8",colors:[{name:"JacksonsPurple",color:"#40407a"},{name:"C64Purple",color:"#706fd3"},{name:"SwanWhite",color:"#f7f1e3"},{name:"SummerSky",color:"#34ace0"},{name:"CelestialGreen",color:"#33d9b2"},{name:"LuckyPoint",color:"#2c2c54"},{name:"Liberty",color:"#474787"},{name:"HotStone",color:"#aaa69d"},{name:"DevilBlue",color:"#227093"},{name:"PalmSpringsSplash",color:"#218c74"},{name:"FlourescentRed",color:"#ff5252"},{name:"SyntheticPumpkin",color:"#ff793f"},{name:"CrocodileTooth",color:"#d1ccc0"},{name:"MandarinSorbet",color:"#ffb142"},{name:"SpicedButterNut",color:"#ffda79"},{name:"EyeOfNewt",color:"#b33939"},{name:"ChileanFire",color:"#cd6133"},{name:"GreyPorcelain",color:"#84817a"},{name:"AlamedaOchre",color:"#cc8e35"},{name:"Desert",color:"#ccae62"}]},{paletteName:"Flat UI Colors Indian",id:"flat-ui-colors-indian",emoji:"\ud83c\uddee\ud83c\uddf3",colors:[{name:"OrchidOrange",color:"#FEA47F"},{name:"SpiroDiscoBall",color:"#25CCF7"},{name:"HoneyGlow",color:"#EAB543"},{name:"SweetGarden",color:"#55E6C1"},{name:"FallingStar",color:"#CAD3C8"},{name:"RichGardenia",color:"#F97F51"},{name:"ClearChill",color:"#1B9CFC"},{name:"WhitePepper",color:"#F8EFBA"},{name:"Keppel",color:"#58B19F"},{name:"ShipsOfficer",color:"#2C3A47"},{name:"FieryFuchsia",color:"#B33771"},{name:"BlueBell",color:"#3B3B98"},{name:"GeorgiaPeach",color:"#FD7272"},{name:"OasisStream",color:"#9AECDB"},{name:"BrightUbe",color:"#D6A2E8"},{name:"MagentaPurple",color:"#6D214F"},{name:"EndingNavyBlue",color:"#182C61"},{name:"SasquatchSocks",color:"#FC427B"},{name:"PineGlade",color:"#BDC581"},{name:"HighlighterLavender",color:"#82589F"}]},{paletteName:"Flat UI Colors French",id:"flat-ui-colors-french",emoji:"\ud83c\uddeb\ud83c\uddf7",colors:[{name:"FlatFlesh",color:"#fad390"},{name:"MelonMelody",color:"#f8c291"},{name:"Livid",color:"#6a89cc"},{name:"Spray",color:"#82ccdd"},{name:"ParadiseGreen",color:"#b8e994"},{name:"SquashBlossom",color:"#f6b93b"},{name:"MandarinRed",color:"#e55039"},{name:"AzraqBlue",color:"#4a69bd"},{name:"Dupain",color:"#60a3bc"},{name:"AuroraGreen",color:"#78e08f"},{name:"IcelandPoppy",color:"#fa983a"},{name:"TomatoRed",color:"#eb2f06"},{name:"YueGuangBlue",color:"#1e3799"},{name:"GoodSamaritan",color:"#3c6382"},{name:"Waterfall",color:"#38ada9"},{name:"CarrotOrange",color:"#e58e26"},{name:"JalapenoRed",color:"#b71540"},{name:"DarkSapphire",color:"#0c2461"},{name:"ForestBlues",color:"#0a3d62"},{name:"ReefEncounter",color:"#079992"}]}],Q=t(189),X=t.n(Q),$=t(185),Z=t.n($),ee=t(126),ae=t.n(ee),te=t(188),oe=t.n(te),ne=t(190),re=t.n(ne),le=t(285),ce=t.n(le),ie=t(100),se=t.n(ie),me=t(99),ue=t.n(me),de=t(128),pe=t.n(de),he=function(e){function a(){var e,t;Object(u.a)(this,a);for(var o=arguments.length,n=new Array(o),r=0;r<o;r++)n[r]=arguments[r];return(t=Object(p.a)(this,(e=Object(h.a)(a)).call.apply(e,[this].concat(n)))).deletePalette=function(e){e.stopPropagation(),t.props.deletePalette(t.props.palette.id)},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.palette,o=e.setPaletteRoute,n=t.colors.map(function(e){return l.a.createElement("div",{key:e.name,className:a.miniColor,style:{backgroundColor:e.color}})});return l.a.createElement("div",{className:a.root,onClick:function(){return o(t.id)}},l.a.createElement("div",{className:a.delete},l.a.createElement(pe.a,{onClick:this.deletePalette,className:a.deleteIcon,style:{transition:"all 0.3s ease-in-out"}})),l.a.createElement("div",{className:a.colors},n),l.a.createElement("h5",{className:a.title},t.paletteName,l.a.createElement("span",{className:a.emoji},t.emoji)))}}]),a}(l.a.PureComponent),fe=Object(C.a)({root:{backgroundColor:"white",boxShadow:"10px 10px 2px -1px rgba(0,0,0,0.32)",border:"1px solid black",borderRadius:"5px",padding:"0.5rem",position:"relative",overflow:"hidden",cursor:"pointer","&:hover svg":{opacity:1,transform:"scale(1.3)"}},colors:{backgroundColor:"#dae1e4",height:"150px",width:"100%",borderRadius:"5px",overflow:"hidden"},title:{display:"flex",justifyContent:"space-between",alignItems:"center",margin:"0",color:"black",paddingTop:"0.5rem",fontSize:"1rem",position:"relative"},emoji:{marginLeft:"0.5rem",fontSize:"1.5rem"},miniColor:{height:"25%",width:"20%",display:"inline-block",position:"relative",margin:"0 auto",marginBottom:"-3.5px"},delete:{width:"40px",height:"40px",padding:"10px",position:"absolute",right:"3px",top:"0",zIndex:30,color:"white"},deleteIcon:{backgroundColor:"#eb3d30",borderRadius:"3px",opacity:0}})(he),ge=t(282),be=t.n(ge),ve=t(187),Ce=t.n(ve),Ee=t(125),we=t.n(Ee),xe={"@global":{".fade-exit":{opacity:1},".fade-exit-active":{opacity:0,transition:"opacity 500ms ease-out"}},root:{backgroundColor:"#0804CC",backgroundImage:"url(".concat(be.a,")"),height:"100vh",display:"flex",alignItems:"flex-start",justifyContent:"center",overflowY:"scroll"},container:(q={width:"50%",display:"flex",alignItems:"flex-start",flexDirection:"center",flexWrap:"wrap"},Object(E.a)(q,S("xl"),{width:"60%"}),Object(E.a)(q,S("lg"),{width:"70%"}),Object(E.a)(q,S("md"),{width:"80%"}),q),nav:{display:"flex",width:"100%",marginBottom:".5rem",justifyContent:"space-between",alignItems:"center",color:"white","& a":{color:"white",padding:".3rem .8rem",textDecoration:"none",backgroundColor:"rgba(255,255,255,.3)"}},palettes:(V={boxSizing:"border-box",width:"100%",display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gridGap:"2rem"},Object(E.a)(V,S("sm"),{gridTemplateColumns:"repeat(2, 1fr)"}),Object(E.a)(V,S("xs"),{gridTemplateColumns:"repeat(1, 1fr)"}),V),avatarCancel:{backgroundColor:we.a[100],color:we.a[600]},avatarCheck:{backgroundColor:Ce.a[100],color:Ce.a[600]}},ye=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).closeDeleteDialog=function(){t.setState({deleteDialogOpen:!1,deletingPaletteId:""})},t.openDeleteDialog=function(e){t.setState({deleteDialogOpen:!0,deletingPaletteId:e})},t.handleDeletePalette=function(){t.props.deletePalette(t.state.deletingPaletteId),t.closeDeleteDialog()},t.setPaletteRoute=function(e){t.props.routeProps.history.push("/palette/"+e)},t.state={deleteDialogOpen:!1},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this,a=this.props,t=a.palettes,o=a.classes;return l.a.createElement("div",{className:o.root},l.a.createElement("div",{className:o.container},l.a.createElement("dir",{className:o.nav},l.a.createElement("h1",null,"React Colors"),l.a.createElement(s.b,{to:"/palette/new"},"CREATE NEW PALETTE")),l.a.createElement(b.a,{className:o.palettes},t.map(function(a,t){return l.a.createElement(v.a,{key:a.id,timeout:500,classNames:"fade"},l.a.createElement(fe,{key:a.id,palette:a,deletePalette:e.openDeleteDialog,setPaletteRoute:e.setPaletteRoute}))}))),l.a.createElement(ue.a,{open:this.state.deleteDialogOpen,onClose:this.closeDialog,"aria-labelledby":"delete-palette-dialog"},l.a.createElement(se.a,{id:"delete-palette-dialog-title"},"Delete this palette?"),l.a.createElement(Z.a,null,l.a.createElement(ae.a,{button:!0,onClick:this.handleDeletePalette},l.a.createElement(oe.a,null,l.a.createElement(X.a,{style:xe.avatarCheck},l.a.createElement(ce.a,null))),l.a.createElement(re.a,{primary:"Delete"})),l.a.createElement(ae.a,{button:!0,onClick:this.closeDeleteDialog},l.a.createElement(oe.a,null,l.a.createElement(X.a,{style:xe.avatarCancel},l.a.createElement(M.a,null))),l.a.createElement(re.a,{primary:"Cancel"})))))}}]),a}(r.Component),je=Object(C.a)(xe)(ye),Oe=[50,100,200,300,400,500,600,700,800,900];var Se,ke,Ne=function(e){for(var a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},t=0,o=Oe;t<o.length;t++){var n=o[t];a.colors[n]=[]}var r,l,c=!0,i=!1,s=void 0;try{for(var m,u=e.colors[Symbol.iterator]();!(c=(m=u.next()).done);c=!0){var d=m.value,p=(r=d.color,l=10,O.a.scale(function(e){return[O()(e).darken(1.4).hex(),e,"#fff"]}(r)).mode("lab").colors(l)).reverse();for(var h in p)a.colors[Oe[h]].push({name:"".concat(d.name," ").concat(Oe[h]),id:d.name.toLowerCase().replace(/ /g,"-"),hex:p[h],rgb:O()(p[h]).css(),rgba:O()(p[h]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(f){i=!0,s=f}finally{try{c||null==u.return||u.return()}finally{if(i)throw s}}return a},Pe={palette:{height:"100vh",display:"flex",flexDirection:"column"},paletteColors:{height:"90%"},backBox:(Se={backgroundColor:"black",width:"20%",height:"50%",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4px"},Object(E.a)(Se,S("lg"),{width:"75%",height:"33%"}),Object(E.a)(Se,S("md"),{width:"50%",height:"20%"}),Object(E.a)(Se,S("xs"),{width:"100%",height:"10%"}),Se),backButton:{color:"white",background:"rgba(255,255,255,.2)",width:"100px",height:"30px",position:"absolute",display:"inline-block",top:"50%",left:"50%",marginLeft:"-50px",marginTop:"-15px",textAlign:"center",outline:"none",fontSize:"1rem",lineHeight:"30px",textTransform:"uppercase",border:"none",cursor:"pointer",textDecoration:"none"}},Be=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).changeFormat=function(e){t.setState({format:e})},t._shades=t.gatherShades(t.props.palette,t.props.match.params.colorId),t.state={format:"hex"},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"gatherShades",value:function(e,a){var t=[],o=e.colors;for(var n in o)t=t.concat(o[n].filter(function(e){return e.id===a}));return t.slice(1)}},{key:"render",value:function(){var e=this.state.format,a=this.props.palette,t=a.paletteName,o=a.emoji,n=a.id,r=this.props.classes,c=this._shades.map(function(a){return l.a.createElement(P,{key:a.name,name:a.name,color:a[e],showLink:!1,showFullPalette:!1})});return l.a.createElement("div",{className:r.palette},l.a.createElement(W,{showLevelSlider:!1,format:e,changeFormat:this.changeFormat}),l.a.createElement("div",{className:r.paletteColors},c,l.a.createElement("div",{className:r.backBox},l.a.createElement(s.b,{to:"/palette/".concat(n),className:r.backButton},"GO BACK"))),l.a.createElement(J,{paletteName:t,emoji:o}))}}]),a}(r.Component),Fe=Object(C.a)(Pe)(Be),De=t(81),Ae=t(296),Ie=t.n(Ae),Le=t(59),Re=t.n(Le),Te=t(298),Ge=t.n(Te),Me=t(297),ze=t.n(Me),Ue=t(38),He=t.n(Ue),We=t(286),qe=t.n(We),Ve=t(129),Je={root:(ke={width:"20%",height:"25%",margin:"0 auto",display:"inline-block",position:"relative",cursor:"pointer",marginBottom:"-4px","&:hover svg":{color:"white",transform:"scale(1.3)"}},Object(E.a)(ke,S("lg"),{width:"25%",height:"20%"}),Object(E.a)(ke,S("md"),{width:"50%",height:"10%"}),Object(E.a)(ke,S("xs"),{width:"100%",height:"5%"}),ke),boxContent:Object(E.a)({position:"absolute",width:"100%",left:"0",bottom:"0",padding:"10px",color:function(e){return O()(e.color.color).luminance()<=.08?"rgba(255, 255, 255, 0.8)":"rgba(0, 0, 0, 0.8)"},letterSpacing:"1px",textTransform:"uppercase",fontSize:"12px",overflow:"hidden",display:"flex",justifyContent:"space-between",alignItems:"center"},S("xs"),{padding:0}),icon:{transition:"all 0.3s ease-in-out"}},Ye=function(e){function a(){return Object(u.a)(this,a),Object(p.a)(this,Object(h.a)(a).apply(this,arguments))}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.color,t=e.classes,o=e.handleRemoveColor;return l.a.createElement("div",{className:t.root,style:{backgroundColor:a.color}},l.a.createElement("div",{className:t.boxContent},l.a.createElement("span",null,a.name),l.a.createElement("div",{onClick:function(){return o(a.name)}},l.a.createElement(pe.a,{className:t.icon}))))}}]),a}(l.a.Component),Ke=Object(Ve.SortableElement)(Object(C.a)(Je)(Ye)),_e=Object(Ve.SortableContainer)(function(e){var a=e.colors,t=e.handleRemoveColor,o=function(e){t(e)};return l.a.createElement("div",{style:{height:"100%"}},a.map(function(e,a){return l.a.createElement(Ke,{index:a,key:e.name,color:e,handleRemoveColor:o})}))}),Qe=t(287),Xe=t.n(Qe),$e=t(290),Ze=t.n($e),ea=t(291),aa=t.n(ea),ta=t(292),oa=t.n(ta),na=t(293),ra=t.n(na),la=t(192),ca=t.n(la),ia=t(191),sa=t.n(ia),ma=t(289),ua=t.n(ma),da=t(53),pa=(t(543),t(300)),ha=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).showEmojiPicker=function(){t.setState({stage:"emoji"})},t.handlePaletteNameChange=function(e){t.setState({newPaletteName:e.target.value})},t.savePalette=function(e){t.props.handleNewPaletteSubmit({paletteName:t.state.newPaletteName,emoji:e.native})},t.state={newPaletteName:"",stage:"form"},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;da.ValidatorForm.addValidationRule("isPaletteNameUnique",function(a){return e.props.palettes.every(function(e){return e.paletteName.toLowerCase()!==a.toLowerCase()})})}},{key:"render",value:function(){var e=this.state,a=e.stage,t=e.newPaletteName,o=this.props.hideSaveForm;return l.a.createElement("div",null,l.a.createElement(ue.a,{open:"emoji"===a,onClose:o},l.a.createElement(se.a,{id:"form-dialog-title",margin:"normal"},"Select Emoji for the palette"),l.a.createElement(sa.a,null,l.a.createElement(pa.a,{onSelect:this.savePalette})),l.a.createElement(ca.a,null,l.a.createElement(He.a,{onClick:o,color:"primary"},"Cancel"))),l.a.createElement(ue.a,{open:"form"===a,onClose:o,"aria-labelledby":"form-dialog-title"},l.a.createElement(se.a,{id:"form-dialog-title"},"Subscribe"),l.a.createElement(da.ValidatorForm,{onSubmit:this.showEmojiPicker},l.a.createElement(sa.a,null,l.a.createElement(ua.a,null,"To subscribe to this website, please enter your email address here. We will send updates occasionally."),l.a.createElement(da.TextValidator,{label:"Palette Name",value:t,name:"newPaletteName",fullWidth:!0,margin:"normal",onChange:this.handlePaletteNameChange,validators:["required","isPaletteNameUnique"],errorMessages:["palette name must be given","palette name must be unique"]})),l.a.createElement(ca.a,null,l.a.createElement(He.a,{onClick:o,color:"primary"},"Cancel"),l.a.createElement(He.a,{variant:"contained",color:"primary",type:"submit"},"Save palette")))))}}]),a}(l.a.Component),fa=function(e){return{root:{display:"flex"},hide:{display:"none"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),flexDirection:"row",justifyContent:"space-between",alignItems:"center",height:"64px"},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:Object(E.a)({margin:"0 20px 0 12px"},S("xs"),{margin:"0 2px 0 2px"}),navButtons:Object(E.a)({marginRight:"1rem"},S("xs"),{marginRight:"2px"}),navButton:Object(E.a)({margin:"0 .5rem"},S("xs"),{margin:"0 2px"}),link:{textDecoration:"none"}}},ga=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).showSaveForm=function(){t.setState({saveFormShowing:!0})},t.hideSaveForm=function(){t.setState({saveFormShowing:!1})},t.state={saveFormShowing:!1},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.open,t=e.handleNewPaletteSubmit,o=e.handleDrawerOpen,n=e.classes,r=e.palettes;return l.a.createElement("div",null,l.a.createElement(Ze.a,null),l.a.createElement(aa.a,{position:"fixed",color:"default",className:y()(n.appBar,Object(E.a)({},n.appBarShift,a))},l.a.createElement(oa.a,{disableGutters:!a},l.a.createElement(T.a,{color:"inherit","aria-label":"Open drawer",onClick:o,className:y()(n.menuButton,a&&n.hide)},l.a.createElement(ra.a,null)),l.a.createElement(Re.a,{variant:"h6",color:"inherit",noWrap:!0},"Create A Palette")),l.a.createElement("div",{className:n.navButtons},l.a.createElement(He.a,{variant:"contained",color:"primary",onClick:this.showSaveForm,className:n.navButton},"Save"),l.a.createElement(s.b,{to:"/",className:n.link},l.a.createElement(He.a,{variant:"contained",color:"secondary",className:n.navButton},"Go Back")))),this.state.saveFormShowing&&l.a.createElement(ha,{handleNewPaletteSubmit:t,palettes:r,hideSaveForm:this.hideSaveForm}))}}]),a}(l.a.Component),ba=Object(De.withStyles)(fa,{withTheme:!0})(ga),va=t(294),Ca={picker:{width:"100% !important",marginTop:"2rem"},addColor:{width:"100%",padding:"1rem",marginTop:"2rem",fontSize:"2rem"},colorNameInput:{width:"100%"}},Ea=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).handleColorNameChange=function(e){t.setState({newColorName:e.target.value})},t.setCurrentColor=function(e){return t.setState({currentColor:e.hex})},t.state={currentColor:"green",newColorName:""},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;da.ValidatorForm.addValidationRule("isColorNameUnique",function(a){return e.props.colors.every(function(e){return e.name.toLowerCase()!==a.toLowerCase()})}),da.ValidatorForm.addValidationRule("isColorUnique",function(a){return e.props.colors.every(function(a){return a.color!==e.state.currentColor})})}},{key:"render",value:function(){var e=this.props,a=e.classes,t=e.paletteIsFull,o=e.addNewColor,n=this.state,r=n.currentColor,c=n.newColorName;return l.a.createElement("div",null,l.a.createElement(va.ChromePicker,{color:r,onChangeComplete:this.setCurrentColor,className:a.picker}),l.a.createElement(da.ValidatorForm,{onSubmit:function(){return o(c,r)}},l.a.createElement(da.TextValidator,{value:c,name:"newColorName",onChange:this.handleColorNameChange,className:a.colorNameInput,placeholder:"Color Name",variant:"filled",margin:"normal",validators:["required","isColorNameUnique","isColorUnique"],errorMessages:["color name must be given","color name must be unique","color must be unique"]}),l.a.createElement(He.a,{variant:"contained",color:"primary",type:"submit",disabled:t,className:a.addColor,style:{backgroundColor:t?"lightGray":r}},t?"Palette Full":"Add Color")))}}]),a}(l.a.Component),wa=Object(C.a)(Ca)(Ea),xa=t(295),ya=function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(400,"px)"),marginLeft:400,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginLeft:12,marginRight:20},hide:{display:"none"},drawer:{width:400,flexShrink:0},drawerPaper:{width:400,display:"flex",alignItems:"center"},drawerHeader:Object(xa.a)({display:"flex",width:"100%",padding:"0 8px",height:"64px"},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,height:"calc(100vh - 64px)",padding:0,transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-400},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0},container:{width:"90%",height:"100%",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"},buttons:{width:"100%"},button:{width:"50%"}}},ja=function(e){function a(e){var t;return Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).handleRemoveColor=function(e){t.setState(function(a){return{colors:a.colors.filter(function(a){return a.name!==e})}})},t.onSortEnd=function(e){var a=e.oldIndex,o=e.newIndex;t.setState(function(e){var t=e.colors;return{colors:Xe()(t,a,o)}})},t.handleDrawerOpen=function(){t.setState({open:!0})},t.handleDrawerClose=function(){t.setState({open:!1})},t.handleClearPalette=function(){return t.setState({colors:[]})},t.handleAddRandomColor=function(){var e,a=t.props.palettes.map(function(e){return e.colors}).flat();if(a.length>0){var o=function(e){return t.state.colors.find(function(a){return a.name===e.name})};do{e=a[Math.floor(Math.random()*a.length)]}while(o(e))}else e={name:"Grey_"+qe()(),color:"#aaa"};t.setState(function(a){var t=a.colors;return{colors:[].concat(Object(m.a)(t),[e])}})},t.addNewColor=function(e,a){var o={name:e,color:a};t.setState(function(e){return{colors:[].concat(Object(m.a)(e.colors),[o]),newColorName:""}})},t.handleNewPaletteSubmit=function(e){var a={id:e.paletteName.toLowerCase().replace(/ /g,"-"),paletteName:e.paletteName,colors:t.state.colors,emoji:e.emoji};t.props.savePalette(a),t.props.history.push("/")},t.state={open:!1,colors:_[0].colors},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"render",value:function(){var e=this.props,a=e.classes,t=e.maxColors,o=this.state,n=o.open,r=o.colors,c=r.length>=t;return l.a.createElement("div",{className:a.root},l.a.createElement(ba,{handleNewPaletteSubmit:this.handleNewPaletteSubmit,handleDrawerOpen:this.handleDrawerOpen,palettes:this.props.palettes,newPaletteName:this.state.newPaletteName,open:n}),l.a.createElement(Ie.a,{className:a.drawer,variant:"persistent",anchor:"left",open:n,classes:{paper:a.drawerPaper}},l.a.createElement("div",{className:a.drawerHeader},l.a.createElement(T.a,{onClick:this.handleDrawerClose},l.a.createElement(ze.a,null))),l.a.createElement(Ge.a,null),l.a.createElement("div",{className:a.container},l.a.createElement(Re.a,{gutterBottom:!0,variant:"h4"},"Design Your Palette"),l.a.createElement("div",{className:a.buttons},l.a.createElement(He.a,{variant:"contained",color:"secondary",className:a.button,onClick:this.handleClearPalette},"Clear Palette"),l.a.createElement(He.a,{variant:"contained",color:"primary",disabled:c,className:a.button,onClick:this.handleAddRandomColor},c?"Palette Full":"Random Color")),l.a.createElement(wa,{paletteIsFull:c,addNewColor:this.addNewColor,colors:r}))),l.a.createElement("main",{className:y()(a.content,Object(E.a)({},a.contentShift,n))},l.a.createElement("div",{className:a.drawerHeader}),l.a.createElement(_e,{colors:this.state.colors,handleRemoveColor:this.handleRemoveColor,axis:"xy",onSortEnd:this.onSortEnd,distance:10})))}}]),a}(l.a.Component);ja.defaultProps={maxColors:20};var Oa=Object(De.withStyles)(ya,{withTheme:!0})(ja);t(716);var Sa=function(e){var a=e.children;return l.a.createElement("section",{className:"page"},a)},ka=function(e){function a(e){var t;Object(u.a)(this,a),(t=Object(p.a)(this,Object(h.a)(a).call(this,e))).savePalette=function(e){t.setState(function(a){return{palettes:[].concat(Object(m.a)(a.palettes),[e])}},t.saveToLocalStorage)},t.deletePalette=function(e){t.setState(function(a){return{palettes:a.palettes.filter(function(a){return a.id!==e})}},t.saveToLocalStorage)},t.findPalette=function(e){return t.state.palettes.find(function(a){return a.id===e})};var o=JSON.parse(window.localStorage.getItem("palettes"));return t.state={palettes:o&&o.length>0?o:_},t}return Object(f.a)(a,e),Object(d.a)(a,[{key:"saveToLocalStorage",value:function(){window.localStorage.setItem("palettes",JSON.stringify(this.state.palettes))}},{key:"render",value:function(){var e=this;return l.a.createElement(g.a,{render:function(a){var t=a.location;return l.a.createElement(b.a,null,l.a.createElement(v.a,{key:t.key,classNames:"page",timeout:500},l.a.createElement(g.c,{location:t},l.a.createElement(g.a,{exact:!0,path:"/palette/new",render:function(a){return l.a.createElement(Sa,null,l.a.createElement(Oa,Object.assign({savePalette:e.savePalette,palettes:e.state.palettes},a)))}}),l.a.createElement(g.a,{exact:!0,path:"/palette/:id",render:function(a){return l.a.createElement(Sa,null,l.a.createElement(K,{palette:Ne(e.findPalette(a.match.params.id))}))}}),l.a.createElement(g.a,{exact:!0,path:"/palette/:paletteId/:colorId",render:function(a){return l.a.createElement(Sa,null,l.a.createElement(Fe,Object.assign({palette:Ne(e.findPalette(a.match.params.paletteId))},a)))}}),l.a.createElement(g.a,{render:function(a){return l.a.createElement(Sa,null,l.a.createElement(je,{palettes:e.state.palettes,deletePalette:e.deletePalette,routeProps:a}))}}))))}})}}]),a}(l.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(s.a,null,l.a.createElement(ka,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[310,1,2]]]);
//# sourceMappingURL=main.4f8b4e9a.chunk.js.map