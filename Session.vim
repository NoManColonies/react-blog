let SessionLoad = 1
let s:so_save = &so | let s:siso_save = &siso | set so=0 siso=0
let v:this_session=expand("<sfile>:p")
silent only
cd ~/Documents/appman-workspace/react-blog
if expand('%') == '' && !&modified && line('$') <= 1 && getline(1) == ''
  let s:wipebuf = bufnr('%')
endif
set shortmess=aoO
badd +1 src/react-app-env.d.ts
badd +9 package.json
badd +6 src/App.tsx
badd +3 src/index.tsx
badd +1 src/setupTests.ts
badd +3 README.md
badd +6 .eslintrc
badd +6 .editorconfig
badd +7 .prettierrc
badd +3 src/pages/Home.tsx
badd +4 src/pages/About.tsx
badd +7 src/pages/Contact.tsx
badd +20 src/config/routes.tsx
badd +26 src/pages/Story.tsx
badd +5 ~/.config/nvim/coc-settings.json
badd +5 public/index.html
badd +7 src/utils/withHelmet.tsx
badd +14 tsconfig.json
badd +6 src/components/NavBar/index.tsx
badd +17 src/components/GlobalStyle.tsx
badd +12 src/utils/useScroll.tsx
badd +9 src/components/BackgroundBlock/index.tsx
badd +4 src/components/Typography/index.tsx
badd +12 term-slider
badd +5 src/components/NavBar/styled.tsx
badd +0 src/components/NavBar/NavBar.spec.tsx
argglobal
%argdel
edit src/components/NavBar/NavBar.spec.tsx
set splitbelow splitright
wincmd _ | wincmd |
vsplit
1wincmd h
wincmd _ | wincmd |
split
1wincmd k
wincmd w
wincmd w
wincmd t
set winminheight=0
set winheight=1
set winminwidth=0
set winwidth=1
exe '1resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe '2resize ' . ((&lines * 28 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 3resize ' . ((&columns * 119 + 119) / 239)
argglobal
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 1 - ((0 * winheight(0) + 13) / 27)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
1
normal! 0
lcd ~/Documents/appman-workspace/react-blog
wincmd w
argglobal
if bufexists("~/Documents/appman-workspace/react-blog/src/components/NavBar/index.tsx") | buffer ~/Documents/appman-workspace/react-blog/src/components/NavBar/index.tsx | else | edit ~/Documents/appman-workspace/react-blog/src/components/NavBar/index.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 3 - ((2 * winheight(0) + 14) / 28)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
3
normal! 069|
wincmd w
argglobal
if bufexists("~/Documents/appman-workspace/react-blog/src/pages/Story.tsx") | buffer ~/Documents/appman-workspace/react-blog/src/pages/Story.tsx | else | edit ~/Documents/appman-workspace/react-blog/src/pages/Story.tsx | endif
setlocal fdm=manual
setlocal fde=0
setlocal fmr={{{,}}}
setlocal fdi=#
setlocal fdl=0
setlocal fml=1
setlocal fdn=20
setlocal fen
silent! normal! zE
let s:l = 25 - ((17 * winheight(0) + 28) / 56)
if s:l < 1 | let s:l = 1 | endif
exe s:l
normal! zt
25
normal! 0
wincmd w
exe '1resize ' . ((&lines * 27 + 29) / 58)
exe 'vert 1resize ' . ((&columns * 119 + 119) / 239)
exe '2resize ' . ((&lines * 28 + 29) / 58)
exe 'vert 2resize ' . ((&columns * 119 + 119) / 239)
exe 'vert 3resize ' . ((&columns * 119 + 119) / 239)
tabnext 1
if exists('s:wipebuf') && getbufvar(s:wipebuf, '&buftype') isnot# 'terminal'
  silent exe 'bwipe ' . s:wipebuf
endif
unlet! s:wipebuf
set winheight=1 winwidth=20 winminheight=1 winminwidth=1 shortmess=filnxtToOFcI
let s:sx = expand("<sfile>:p:r")."x.vim"
if file_readable(s:sx)
  exe "source " . fnameescape(s:sx)
endif
let &so = s:so_save | let &siso = s:siso_save
let g:this_session = v:this_session
let g:this_obsession = v:this_session
doautoall SessionLoadPost
unlet SessionLoad
" vim: set ft=vim :
