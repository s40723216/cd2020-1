var tipuesearch = {"pages": [{'title': 'About', 'text': '此內容管理系統以\xa0 https://github.com/mdecourse/cmsimde \xa0作為 submodule 運作, 可以選定對應的版本運作, cmsimde 可以持續改版, 不會影響之前設為 submodule, 使用舊版 cmsimde 模組的內容管理相關運作. \n 利用 cmsimde 建立靜態網誌方法: \n 1. 在 github 建立倉儲, git clone 到近端 \n 2. 參考\xa0 https://github.com/mdecourse/newcms , 加入除了 cmsimde 目錄外的所有內容 \n 以 git submodule add\xa0 https://github.com/mdecourse/cmsimde \xa0cmsimde \n 建立 cmsimde 目錄, 並從 github 取下子模組內容. \n 3.在近端維護時, 更換目錄到倉儲中的 cmsimde, 以 python wsgi.py 啟動近端網際伺服器. \n 動態內容編輯完成後, 以 generate_pages 轉為靜態內容, 以 git add commit 及 push 將內容推到遠端. \n 4. 之後若要以 git clone 取下包含 submodule 的所有內容, 執行: \n git clone --recurse-submodules  https://github.com/mdecourse/newcms.git \n', 'tags': '', 'url': 'About.html'}, {'title': 'weeks', 'text': 'week1~week5 \n week6~week9 \n week10~week14 \n week15~week18 \n', 'tags': '', 'url': 'weeks.html'}, {'title': 'week1~week5', 'text': 'WEEK1 \n 1.下載 2019Fall可攜套件.7z \xa0 (編譯\xa0 Solvespace 用)，完成後開啟。 2.登入個人github帳號，創建新的倉儲cd2020。 3.進入要存放的 資料夾 4.輸入 git clone \xa0 https://github.com/s40723246/cd2020 \xa0。 5.輸入git submodule add https://github.com/mdecourse/cmsimde.git 。 6.將up_dir的裡的資料複 製到cd2020 。 7.完成後，python wsgi.py 開始編輯倉儲。 8.編輯完成後， \xa0 git add . \xa0 > \xa0 git commit -m "\xa0 " \xa0 > \xa0 git push。\xa0 \xa0 \n WEEK2 \n 第一組第一次直播會議 \n 第一組\xa0 第一次會議\xa0\xa0\xa0 \xa0 (WEEK1 ) \xa0 \n \xa0 1.成員簽到 \xa0 \n 2.討論日後分工 \xa0 \n 3.有問題的同學提出問題 \xa0 \n \xa0 成員名單 \xa0 \n 1. 40723201 \xa0 (簽 ) 已建立完成網站 \xa0 \n 2.40723206 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 3.40723213 (簽) \xa0 已建立完成網站 \xa0 \n 4.40723216 (簽) \xa0 已建立完成網站 \xa0 \n 5.40723223 (簽)\xa0 已建立完成網站 \xa0 \n 6.40723226 (簽) \xa0 已建立完成網站 \xa0 \n 7.40723229 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 8.40723230 (簽) \xa0 已建立完成網站 \xa0 \n 9.40723241 (簽) \xa0 已建立完成網站\xa0 \xa0 \n 10.40723242 (簽) \xa0 已建立完成網站 \xa0 小組長 \xa0 \n 11.40723246 (group leader) (簽) \xa0 已建立完成網站 \xa0 \n 12.40732319 (簽) \xa0\xa0 \n \xa0 日後小組分工 \xa0 \n 1.由(40723201、40723206、40723230、40723241、40723246)， 已經建立好網站及編輯完網站的同學，前去協助還沒完成的同學 \xa0 \n 2. 40723213 、 40723242督處尚未完成的同學，互相協助來完成第一周課程 \xa0 \n 3.40723223 、 40723223負責處理小組會議 \xa0 \n 4.40723246 \xa0 負責製作小組會議 \xa0 \n 5.40723241 、 40723216提醒小組問題及完成分組作業 \xa0 \n \xa0 組員會議中提醒的事項 \xa0 \n \xa0 1.網站的格式及編譯 \xa0 \n \xa0 2.其餘的工作分配 \xa0 \n \xa0 3.PDF放倉儲的位置及如何放置 \n', 'tags': '', 'url': 'week1~week5.html'}, {'title': 'week6~week9', 'text': '', 'tags': '', 'url': 'week6~week9.html'}, {'title': 'week10~week14', 'text': '', 'tags': '', 'url': 'week10~week14.html'}, {'title': 'week15~week18', 'text': '', 'tags': '', 'url': 'week15~week18.html'}, {'title': 'Develop', 'text': 'https://github.com/mdecourse/cmsimde \xa0的開發, 可以在一個目錄中放入 cmsimde, 然後將 up_dir 中的內容放到與 cmsimde 目錄同位階的地方, 使用 command 進入 cmsimde 目錄, 執行 python wsgi.py, 就可以啟動, 以瀏覽器 https://localhost:9443\xa0就可以連接, 以 admin 作為管理者密碼, 就可以登入維護內容. \n cmsimde 的開發採用 Leo Editor, 開啟 cmsimde 目錄中的 cmsimde.leo 就可以進行程式修改, 結束後, 若要保留網際內容, 只要將 cmsimde 外部的內容倒回 up_dir 目錄中即可後續對 cmsimde 遠端倉儲進行改版. \n init.py 位於\xa0 up_dir 目錄, 可以設定 site_title 與 uwsgi 等變數.', 'tags': '', 'url': 'Develop.html'}]};