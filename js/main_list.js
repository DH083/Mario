// info
const INFO_LIST = [
    [
        {no: 1, src: '01.jpg', date: '2023.4.26', txt: 'Nintendo Switch 소프트웨어 특집 「Nintendo Switch로 즐길 수 있는 마리오 소프트웨어」 추천'},
        {no: 2, src: '02.jpg', date: '2023.3.10', txt: '영화 『슈퍼 마리오 브라더스』의 파이널 트레일러가 공개되었습니다.'},
        {no: 3, src: '03.jpg', date: '2023.3.6', txt: '『마리오 카트 8 디럭스 - 부스터 코스 패스』 제4탄이 3월 9일(목)에 배포됩니다. 코스 소개 영상도 공개되었습니다.'}
    ],
    [
        {no:1 , src: 'img.png', txt:'마리오 카트 8 디럭스'},
        {no:2 , src: 'aaaca.png', txt:'슈퍼 마리오 오디세이'},
        {no:3 , src: 'baaqa.png', txt:'슈퍼 마리오 메이커 2'}
    ],
    []
]

const MAIN_INFO = [
    [
        {txt: `빨간 모자에 파란 작업복, 트레이드 마크인 콧수염.
        언제나 밝고 활기찬 마리오.
        
        달리고, 뛰고, 슈퍼버섯으로 파워 업.
        다양한 액션과 아이템을 사용하며
        세계 각지로 모험을 떠납니다.
        골프나 테니스를 비롯한 스포츠도 잘하고,
        화려한 드라이빙 테크닉을 뽐내기도 합니다.
        
        해외에서 1981년에 아케이드 버전 『동키콩』에 등장한 이래,
        수 많은 게임에서 활약 중인 마리오.
        
        루이지나 피치공주, 요시 등 친구들과 함께
        앞으로도 마리오의 모험은 계속됩니다!`}
    ]
]

const GAME_LIST = [
    [
        {no:16 , src: '16.jpg', title:'마리오 + 래비드 반짝이는 희망(MARIO + RABBIDS SPARKS OF HOPE)', ex:'<span>체험판</span>', date: '2022.10.20', price: '64,800원', company: 'Ubisoft'},

        {no:15 , src: '15.jpg', title:'마리오 스트라이커즈 배틀 리그', ex:'<span>체험판</span>', date: '2022.06.10', price: '64,800원', company: '한국닌텐도'},

        {no:14 , src: '14.jpg', title:'마리오 파티 슈퍼스타즈', ex:'', date: '2021.10.29', price: '64,800원', company: '한국닌텐도'},

        {no:13 , src: '13.jpg', title:'마리오 골프 슈퍼 러시', ex:'', date: '2021.06.25', price: '64,800원', company: '한국닌텐도'},

        {no:12 , src: '12.jpg', title:'슈퍼 마리오 3D 월드 + 퓨리 월드', ex:'', date: '2021.02.12', price: '64,800원', company: '한국닌텐도'},

        {no:11 , src: '11.jpg', title:'마리오 카트 라이브: 홈 서킷', ex:'', date: '2020.12.17', price: '109,800원', company: '한국닌텐도'},

        {no:10 , src: '10.jpg', title:'페이퍼 마리오 종이접기 킹', ex:'', date: '2020.07.17', price: '64,800원', company: '한국닌텐도'},

        {no:9 , src: '09.jpg', title:'마리오와 소닉 AT 2020 도쿄 올림픽™', ex:'<span>체험판</span>', date: '2019.11.01', price: '59,800원', company: 'SEGA'},

        {no:8 , src: '08.jpg', title:'슈퍼 마리오 메이커 2', ex:'', date: '2019.06.28', price: '64,800원', company: '한국닌텐도'},

        {no:7 , src: '07.jpg', title:'뉴 슈퍼 마리오브라더스 U 디럭스', ex:'', date: '2019.01.11', price: '64,800원', company: '한국닌텐도'},

        {no:6 , src: '06.jpg', title:'슈퍼 마리오 파티', ex:'', date: '2018.10.05', price: '64,800원', company: '한국닌텐도'},

        {no:5 , src: '05.jpg', title:'마리오 테니스 에이스', ex:'', date: '2018.06.22', price: '64,800원', company: '한국닌텐도'},

        {no:4 , src: '04.jpg', title:'마리오 + 래비드 킹덤 배틀', ex:'', date: '2018.01.18', price: '64,800원', company: '한국닌텐도'},

        {no:3 , src: '03.jpg', title:'슈퍼 마리오 오디세이', ex:'', date: '2017.12.01', price: '64,800원', company: '한국닌텐도'},

        {no:2 , src: '02.jpg', title:'마리오 카트 8 디럭스', ex:'', date: '2017.12.15', price: '64,800원', company: '한국닌텐도'}
    ],

    [
        {no:1 , src: 'kart', title:'마리오 카트 투어'},
        {no:2 , src: 'run', title:'슈퍼 마리오 런'}
    ],

    [
        {no: 1, years: '1985', date: '10.18', url: 'smb/thumb.png', console: 'Nintendo Entertainment System', title:'슈퍼 마리오 브라더스', kr_date: ''},

        {no: 2, years: '1986', date: '6.3', url: 'smb2/thumb.jpg', console: 'Nintendo Entertainment System', title:'슈퍼 마리오 브라더스 더 로스트 레벨즈', kr_date: ''},

        {no: 3, years: '1988', date: '10.9', url: 'null.png', console: 'Nintendo Entertainment System', title:'슈퍼 마리오 브라더스 2', kr_date: ''},

        {no: 4, years: '1989', date: '8.11', url: 'land/thumb.png', console: 'Game Boy', title:'Super Mario Land', kr_date: ''},

        {no: 5, years: '1990', date: '2.12', url: 'smb3/thumb.png', console: 'Nintendo Entertainment System', title:'슈퍼 마리오 브라더스 3', kr_date: ''},

        {no: 6, years: '1991', date: '8.13', url: 'world/thumb.png', console: 'Super Nintendo Entertainment System', title:'슈퍼 마리오 월드', kr_date: ''},

        {no: 7, years: '1992', date: '9.1', url: 'kart/thumb.png', console: 'Super Nintendo Entertainment System', title:'Super Mario Kart', kr_date: ''},

        {no: 8, years: '1992', date: '11.2', url: 'land2/thumb.png', console: 'Game Boy', title:'Super Mario Land 2:<br>6 Golden Coins', kr_date: ''},

        {no: 9, years: '1996', date: '9.29', url: '64/thumb.png', console: 'Nintendo 64', title:'Super Mario 64', kr_date: ''},

        {no: 10, years: '1997', date: '2.10', url: 'kart_64/thumb.png', console: 'Nintendo 64', title:'마리오 카트 64', kr_date: ''},

        {no: 11, years: '1999', date: '2.8', url: 'party/thumb.png', console: 'Nintendo 64', title:'Mario Party', kr_date: ''},

        {no: 12, years: '2000', date: '1.24', url: 'party2/thumb.png', console: 'Nintendo 64', title:'Mario Party 2', kr_date: ''},

        {no: 13, years: '2000', date: '8.28', url: 'tennis_64/thumb.png', console: 'Nintendo 64', title:'Mario Tennis', kr_date: ''},

        {no: 14, years: '2001', date: '1.16', url: 'null.png', console: 'Game Boy Color', title:'Mario Tennis', kr_date: ''},

        {no: 15, years: '2001', date: '2.5', url: 'null.png', console: 'Nintendo 64', title:'Paper Mario', kr_date: ''},

        {no: 16, years: '2001', date: '5.7', url: 'null.png', console: 'Nintendo 64', title:'Mario Party 3', kr_date: ''},

        {no: 17, years: '2001', date: '8.27', url: 'kart_advance/thumb.png', console: 'Game Boy Advance', title:'Mario Kart:<br>Super Circuit', kr_date: ''},

        {no: 18, years: '2002', date: '8.25', url: 'sunshine/thumb.png', console: 'Nintendo GameCube', title:'Super Mario<br>Sunshine', kr_date: ''},

        {no: 19, years: '2002', date: '11.8', url: 'null.png', console: 'Nintendo GameCube', title:'Mario Party 4', kr_date: ''},

        {no: 20, years: '2003', date: '11.17', url: 'kart_double_dash/thumb.png', console: 'Nintendo GameCube', title:'Mario Kart:<br>Double Dash', kr_date: ''},

        {no: 21, years: '2003', date: '11.17', url: 'mr_rpg/thumb.png', console: 'Game Boy Advance', title:'Mario & Luigi:<br>Superstar Saga', kr_date: ''},

        {no: 22, years: '2003', date: '11.28', url: 'null.png', console: 'Nintendo GameCube', title:'Mario Party 5', kr_date: ''},
        
        {no: 23, years: '2004', date: '10.11', url: 'null.png', console: 'Nintendo GameCube', title:'Paper Mario:<br>The Thousand-Year Door', kr_date: ''},

        {no: 24, years: '2004', date: '11.8', url: 'null.png', console: 'Nintendo GameCube', title:'Mario Power Tennis', kr_date: ''},
        
        {no: 25, years: '2004', date: '12.6', url: 'null.png', console: 'Nintendo GameCube', title:'Mario Party 6', kr_date: ''},
        
        {no: 26, years: '2005', date: '3.28', url: 'null.png', console: 'Game Boy Advance', title:'Mario Party<br>Advance', kr_date: ''},
        
        {no: 27, years: '2005', date: '11.7', url: 'null.png', console: 'Nintendo GameCube', title:'Mario Party 7', kr_date: ''},
        
        {no: 28, years: '2005', date: '11.14', url: 'kart_ds/thumb.png', console: '닌텐도 DS', title:'마리오 카트 DS', kr_date: '한국 발매일: 2007.04.05'},
        
        {no: 29, years: '2005', date: '11.28', url: 'mr_rpg2/thumb.png', console: '닌텐도 DS', title:'마리오&루이지 RPG<br>시간의 파트너', kr_date: '한국 발매일: 2010.07.08'},
        
        {no: 30, years: '2005', date: '12.5', url: 'null.png', console: 'Game Boy Advance', title:'Mario Tennis:<br>Power Tour', kr_date: ''},
        
        {no: 31, years: '2006', date: '5.15', url: 'new_smb/thumb.png', console: '닌텐도 DS', title:'뉴 슈퍼 마리오<br>브라더스', kr_date: '한국 발매일: 2007.03.08'},
        
        {no: 32, years: '2007', date: '4.9', url: 'super_paper/thumb.png', console: 'Wii', title:'슈퍼 페이퍼<br>마리오', kr_date: '한국 발매일: 2009.02.26'},
        
        {no: 33, years: '2007', date: '5.29', url: 'party8/thumb.jpg', console: 'Wii', title:'마리오 파티 8', kr_date: '한국 발매일: 2008.11.06'},
        
        {no: 34, years: '2007', date: '7.30', url: 'strikers_charged/thumb.jpg', console: 'Wii', title:'마리오 파워 사커', kr_date: '한국 발매일: 2010.03.18'},
        
        {no: 35, years: '2007', date: '11.12', url: 'galxy/thumb.jpg', console: 'Wii', title:'슈퍼 마리오 Wii<br>갤럭시 어드벤처', kr_date: '한국 발매일: 2008.09.04'},
                
        {no: 36, years: '2007', date: '11.19', url: 'party_ds/thumb.png', console: '닌텐도 DS', title:'마리오 파티 DS', kr_date: '한국 발매일: 2008.05.22'},
                        
        {no: 37, years: '2008', date: '4.27', url: 'kart_wii/thumb.jpg', console: 'Wii', title:'마리오 카트 Wii', kr_date: '한국 발매일: 2009.04.30'},
                        
        {no: 38, years: '2009', date: '3.9', url: 'null.png', console: 'Wii', title:'New Play Control!<br>Mario Power Tennis', kr_date: ''},
                        
        {no: 39, years: '2009', date: '9.15', url: 'mr_rpg3/thumb.png', console: '닌텐도 DS', title:'마리오&루이지<br>RPG 3 쿠파 몸속 대모험', kr_date: '한국 발매일: 2011.07.21'},
                        
        {no: 40, years: '2009', date: '11.15', url: 'new_smb_wii/thumb.png', console: 'Wii', title:'뉴 슈퍼 마리오<br>브라더스 Wii', kr_date: '한국 발매일: 2010.08.07'},
                        
        {no: 41, years: '2010', date: '5.23', url: 'galxy2/thumb.jpg', console: 'Wii', title:'슈퍼 마리오 Wii 2<br>갤럭시 어드벤처 투게더', kr_date: '한국 발매일: 2011.01.20'},
                        
        {no: 42, years: '2011', date: '11.13', url: '3d_land/thumb.png', console: '닌텐도 3DS', title:'슈퍼 마리오<br>3D랜드', kr_date: '한국 발매일: 2012.04.28'},
                        
        {no: 43, years: '2011', date: '12.4', url: 'kart7/thumb.png', console: '닌텐도 3DS', title:'마리오 카트 7', kr_date: '한국 발매일: 2012.05.31'},
                        
        {no: 44, years: '2012', date: '3.11', url: 'party9/thumb.jpg', console: 'Wii', title:'마리오 파티 9', kr_date: '한국 발매일: 2013.04.11'},
                        
        {no: 45, years: '2012', date: '5.20', url: 'tennis_open/thumb.png', console: '닌텐도 3DS', title:'마리오 테니스<br>오픈', kr_date: '한국 발매일: 2013.04.18'},
                        
        {no: 46, years: '2012', date: '8.19', url: 'new_smb2/thumb.png', console: '닌텐도 3DS', title:'뉴 슈퍼 마리오<br>브라더스 2', kr_date: '한국 발매일: 2012.12.06'},
                        
        {no: 47, years: '2012', date: '11.11', url: 'paper_seal/thumb.png', console: '닌텐도 3DS', title:'페이퍼 마리오<br>스티커 스타', kr_date: '한국 발매일: 2013.06.06'},
                        
        {no: 48, years: '2012', date: '11.18', url: 'new_smb_u/thumb.png', console: 'Wii U', title:'New Super Mario<br>Bros.U', kr_date: ''},
                        
        {no: 49, years: '2013', date: '8.11', url: 'mr_rpg4/thumb.png', console: '닌텐도 3DS', title:'마리오&루이지<br>RPG 4 드림 어드벤처', kr_date: '한국 발매일: 2014.01.16'},
                        
        {no: 50, years: '2013', date: '11.22', url: '3d_world/thumb.png', console: 'Wii U', title:'Super Mario<br>3D World', kr_date: ''},
                        
        {no: 51, years: '2013', date: '11.22', url: 'party_island/thumb.png', console: '닌텐도 3DS', title:'마리오 파티<br>아일랜드 투어', kr_date: '한국 발매일: 2014.03.20'},
                        
        {no: 52, years: '2014', date: '5.2', url: 'golf_worldtour/thumb.png', console: '닌텐도 3DS', title:'마리오 골프<br>월드 투어', kr_date: ''},
                        
        {no: 53, years: '2014', date: '5.30', url: 'null.png', console: 'Wii U', title:'Mario Kart 8', kr_date: ''},
                        
        {no: 54, years: '2015', date: '3.20', url: 'null.png', console: 'Wii U', title:'Mario Party 10', kr_date: ''},
                        
        {no: 55, years: '2015', date: '9.11', url: 'null.png', console: 'Wii U', title:'Super Mario<br>Maker', kr_date: ''},
                        
        {no: 56, years: '2015', date: '11.20', url: 'null.png', console: 'Wii U', title:'Mario Tennis<br>Ultra Smash', kr_date: ''},
                        
        {no: 57, years: '2016', date: '1.22', url: 'mr_rpg_paper/thumb.png', console: '닌텐도 3DS', title:'마리오&루이지<br>RPG 페이퍼 마리오 MIX', kr_date: '한국 발매일: 2016.05.26'},
                        
        {no: 58, years: '2016', date: '10.7', url: 'null.png', console: 'Wii U', title:'Paper Mario<br>Color Splash', kr_date: ''},
                        
        {no: 59, years: '2016', date: '11.4', url: 'party_star/thumb.png', console: '닌텐도 3DS', title:'마리오 파티 스타<br>러시', kr_date: '한국 발매일: 2017.04.27'},
                        
        {no: 60, years: '2016', date: '12.2', url: 'maker_3ds/thumb.png', console: '닌텐도 3DS', title:'슈퍼 마리오 메이커<br>for 닌텐도 3DS', kr_date: '한국 발매일: 2018.11.29'},
                        
        {no: 61, years: '2016', date: '12.15', url: 'run/thumb.png', console: '스마트폰용 앱', title:'슈퍼 마리오<br>런', kr_date: '한국 발매일: 2017.02.01'},
                        
        {no: 62, years: '2017', date: '4.28', url: 'kart8_dx/thumb.png', console: 'Nintendo Switch', title:'마리오 카트 8<br>디럭스', kr_date: '한국 발매일: 2017.12.15'},
                        
        {no: 63, years: '2017', date: '8.29', url: 'rabbids_kingdom/thumb.png', console: 'Nintendo Switch', title:'마리오 + 래비드<br>킹덤 배틀', kr_date: '한국 발매일: 2018.01.18'},
                        
        {no: 64, years: '2017', date: '10.6', url: 'mr_rpg_dx/thumb.png', console: '닌텐도 3DS', title:'마리오&루이지 RPG 1 DX', kr_date: '한국 발매일: 2018.04.12'},
                        
        {no: 65, years: '2017', date: '10.27', url: 'odyssey/thumb.png', console: 'Nintendo Switch', title:'슈퍼 마리오<br>오디세이', kr_date: '한국 발매일: 2017.12.01'},
                        
        {no: 66, years: '2017', date: '11.10', url: 'party100/thumb.png', console: '닌텐도 3DS', title:'Mario Party<br>The Top 100', kr_date: ''},
                        
        {no: 67, years: '2018', date: '6.22', url: 'tennis_ace/thumb.png', console: 'Nintendo Switch', title:'마리오 테니스<br>에이스', kr_date: ''},
                        
        {no: 68, years: '2018', date: '10.5', url: 'super_party/thumb.png', console: 'Nintendo Switch', title:'슈퍼 마리오<br>파티', kr_date: ''},
                        
        {no: 69, years: '2019', date: '1.11', url: 'null.png', console: '닌텐도 3DS', title:"Mario&Luigi:<br>Bowser's Inside Story<br>+ Bowser Jr's Journey", kr_date: ''},
                        
        {no: 70, years: '2019', date: '1.11', url: 'new_smb_u_dx/thumb.png', console: 'Nintendo Switch', title:'뉴 슈퍼 마리오<br>브라더스 U<br>디럭스', kr_date: ''},
                        
        {no: 71, years: '2019', date: '6.28', url: 'maker2/thumb.png', console: 'Nintendo Switch', title:'슈퍼 마리오<br>메이커 2', kr_date: ''},
                        
        {no: 72, years: '2019', date: '9.25', url: 'kart_tour/thumb.png', console: '스마트폰용 앱', title:'마리오 카트<br>투어', kr_date: ''},
                        
        {no: 73, years: '2020', date: '7.17', url: 'paper_origami/thumb.png', console: 'Nintendo Switch', title:'페이퍼 마리오<br>종이접기 킹', kr_date: ''},
                        
        {no: 74, years: '2020', date: '9.18', url: '3d_collection/thumb.png', console: 'Nintendo Switch', title:'슈퍼 마리오<br>3D 컬렉션', kr_date: ''},
                        
        {no: 75, years: '2020', date: '10.16', url: 'kart_lhc/thumb.png', console: 'Nintendo Switch', title:'마리오 카트 라이브:<br>홈 서킷', kr_date: '한국 발매일: 2020.12.17'},
                        
        {no: 76, years: '2021', date: '2.12', url: '3d_fury_world/thumb.png', console: 'Nintendo Switch', title:'슈퍼 마리오 3D 월드<br>퓨리 월드', kr_date: ''},
                        
        {no: 77, years: '2021', date: '6.25', url: 'golf_rush/thumb.png', console: 'Nintendo Switch', title:'마리오 골프 슈퍼 러시', kr_date: ''},
                        
        {no: 78, years: '2021', date: '10.29', url: 'party_superstars/thumb.png', console: 'Nintendo Switch', title:'마리오 파티<br>슈퍼스타즈', kr_date: ''},
                        
        {no: 79, years: '2022', date: '6.10', url: 'strikers_battleleague/thumb.png', console: 'Nintendo Switch', title:'마리오 스트라이커즈<br>배틀 리그', kr_date: ''},
                        
        {no: 80, years: '2022', date: '10.20', url: 'rabbids_galaxy/thumb.png', console: 'Nintendo Switch', title:'마리오 + 래비드<br>반짝이는 희망', kr_date: ''},
        
    ]
]