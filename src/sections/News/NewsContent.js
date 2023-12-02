import { Autocomplete, Box, Card, CardMedia, Container, Grid, Pagination, TextField, Typography, styled, useTheme } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import LazyLoad from 'react-lazyload'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlay } from '@fortawesome/free-solid-svg-icons'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';

library.add(fas, faFontAwesome, faPlay)

const FeaturedNewstWrap = styled(Box)(({ theme }) => ({
  position: 'relative',
  backgroundColor: theme.color.white,
  boxShadow:'0 5px 20px rgba(34,34,34,.1)', 
  borderRadius: '10px',
  height:'100%'
}));

const FeaturedNewstImage = styled(Box)(({ theme, image }) => ({
  background: `url("${image}")`,
  height: 'auto',
  aspectRatio: 1.6,
  width: '100%',
  borderRadius: '10px 10px 0 0',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundRepeat: 'no-repeat',
  position: 'relative'
}));
const BlogButton = styled(Box)(({ theme }) => ({
  a: {
    color: theme.color.black,
    background: 0,
    border: 'none',
    borderRadius: '25px',
    paddingRight: '25px',
    lineHeight: '30px',
    display: 'inline-block',
    transition: 'all .4s ease-in-out 0s',
    position: 'relative',
    fontSize: '16px',
    fontWeight: 600,
    textDecoration: 'none',
    '&:hover': {
      color: theme.color.red,
      '.arrow-news': {
        color: theme.color.red,
        transform: 'translateX(20%)',
      },
    },
  },
  '.arrow-news': {
    position: 'absolute',
    top: 0,
    right: 0,
    transition: 'transform 0.5s ease',
    lineHeight: '1.5rem',
  },
}));

export const news = [
    {date: '30-12-2023',id : '18',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '2', title :"QUY TRÌNH CẤP PHÉP ĐÀO LỀ, ĐỤC MƯƠNG, ĐỤC HỐ GA, GỬI NƯỚC THẢI SINH HOẠT", content: `<p>Vỉa hẻ, thoát nước đô thị là bộ phận của hệ thống hạ tầng kỹ thuật đô thị do Nhà nước thống nhất quản lý và có phân cấp quản lý. Công ty Cổ phần Môi trường và Công trình đô thị Huế (HEPCO) đang được UBND thành phố Huế đặt hàng quản lý vận hành hệ thống thoát nước lề đường thuộc hệ thống hạ tầng kỹ thuật đô thị thành phố, là đơn vị trung gian tiếp nhận hồ sơ cấp phép tử UBND thành phố Huế.</p><p>Khi chuẩn bị tiến hành thi công công trình về đào lề, vỉa hè để lắp đặt (sửa chữa), đục mương, đục hố ga và gửi nước thải sinh hoạt, chủ đơn vị thi công phải tiến hành làm thủ tục cấp phép của cơ quan có thẩm quyền, có giải pháp để bảo đảm không ảnh hưởng đến trật tự an toàn giao thông, vệ sinh môi trường và mỹ quan đô thị. Đồng thời có cam kết bảo đảm thực hiện đúng thời hạn và bảo đảm chất lượng về việc hoàn trả lại đoạn đường đã đào.</p><p>Khách hàng có nhu cầu muốn đăng ký cấp phép về đào về đục mương hố ga, gửi nước thải sinh hoạt vui lòng liên hệ theo số hotline 0234 3823896 - 0234 3997799; hoặc trực tiếp đăng ký tại Bộ phận Giao dịch tại 46 Trần Phú, phường Vĩnh Ninh, thành phố Huế để được tư vấn và giải quyết một cách nhanh chóng nhất.HEPCO - Công ty Cổ phần Môi trường và Công trình đô thị Huế</p><p><span class="image-inline ck-widget image_resized ck-widget_with-resizer" style="width:16px;" contenteditable="false"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2d/1/16/1f4cd.png" alt="📍"><div class="ck ck-reset_all ck-widget__resizer ck-hidden"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view" style="display: none;"></div></div></span>&nbsp;46 Trần Phú - Thành phố Huế</p><p><span class="image-inline ck-widget image_resized ck-widget_with-resizer" style="width:16px;" contenteditable="false"><img src="https://static.xx.fbcdn.net/images/emoji.php/v9/t22/1/16/260e.png" alt="☎️"><div class="ck ck-reset_all ck-widget__resizer ck-hidden"><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-left"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-top-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-right"></div><div class="ck-widget__resizer__handle ck-widget__resizer__handle-bottom-left"></div><div class="ck ck-size-view" style="display: none;"></div></div></span>&nbsp;Hotline - 02343 997799</p><figure class="image ck-widget ck-widget_selected" contenteditable="false"><img src="http://www.hepco.com.vn/Public/Upload/images/Dichvu/DaoLe.jpg">`},
    {date: '30-12-2023',id : '19',author: 'Admin', image: "/assets/images/banner1.jpg",  group_id: '2', title :"TƯNG BỪNG NGÀY HỘI TÁI CHẾ - HUẾ 2023", content: `<p>Sáng ngày 14 tháng 5 năm 2023 – tại Trung tâm Thông tin Môi trường (46 Trần Phú, TP Huế), Dự án Huế - Đô thị giảm nhựa ở miền Trung Việt Nam (được tài trợ bởi Tổ chức quốc tế về Bảo tồn thiên nhiên (WWF) tại Việt Nam thông qua WWF-Nauy) và Công ty Cổ phần Môi trường và Công trình Đô thị Huế (HEPCO) tổ chức sự kiện Ngày hội tái chế Huế 2023.</p>

    <p>Hoạt động thu hút sự tham gia của gần 200 học sinh, phụ huynh và giáo viên của 07 trường học trên địa bàn thành phố Huế bao gồm các trường: Trường Tiểu học Phú Tân, Trường Tiểu học Phú Bình, Trường Tiểu học số 1 An Đông, Trường Tiểu học số 1 Thuận An, Trường Tiểu học số 2 Thuận An, Trường Tiểu học Vỹ Dạ. và Trường THCS Trần Cao Vân.</p>
    
    <p>Sự kiện với nhiều hoạt động nâng cao kiến thức và kỹ năng thực hiện tái sử dụng, tái chế, của các em học sinh, đặc biệt chú trọng tái chế sản phẩm nhựa, thay thế việc sử dụng bao bì ni lông trong các hoạt động Nghề truyền thống tại Huế như: Trải nghiệm làm hoa giấy, trải nghiệm gói bánh truyền thống từ giấy, trải nghiệm làm giấy từ rơm.</p>
    
    <p>Ngoài ra các em học sinh còn được tham quan Trung tâm Thông tin Môi trường, tham gia các trò chơi về phân loại rác, giảm thiểu rác thải nhựa và biểu diễn các tiết mục văn nghệ với chủ đề về môi trường.</p>
    
    <p>Hoạt động được tổ chức nhằm tạo sân chơi cho các bạn học sinh tại Huế, nâng cao ý thức bảo vệ môi trường, giảm thiểu rác nhựa, góp phần xây dựng Huế trở thành đô thị giảm nhựa ở miền Trung Việt Nam.</p>
    
    <p>Cùng đón chờ sự kiện ngày hội tái chế tiếp theo trong năm 2023 bạn nha <img alt="😍" src="https://static.xx.fbcdn.net/images/emoji.php/v9/t2/1/16/1f60d.png" style="height:16px; width:16px"></p>
    
    <p>Nguồn: <a href="https://www.facebook.com/HuePlasticSmartCity?__cft__[0]=AZWIPTXHQOTpHfDWe0WukRXIku7DkwGg5qkAutJkbXFbbsYOZm7xpIF9ijCni5TMHJvN1nsLJZHdodv7Mvyl9A7KV83Xly4JF5baehC6wnvhAAF10NuhJTfqJ72n8FcvBUXxGf3di04W0zVoicLAHbQ-QGbBqHjxnGkiqd7F2mI-hSZTFENvRoJkw9lXgv6yh1c&amp;__tn__=-]K-R" tabindex="0">Dự án Huế - Đô thị Giảm Nhựa ở miền Trung Việt Nam</a></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347259211_1399570530865033_4467954850211736613_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346937471_810039673401151_3983513850142061894_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346977078_1266289100653250_8830184759971648733_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/346977078_1266289100653250_8830184759971648733_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347118351_753519226519538_3321457128392345595_n.jpg" style="height:267px; width:400px"></p>
    
    <p style="text-align:center">&nbsp;</p>
    
    <p style="text-align:center"><img alt="" src="/Public/Upload/images/Tintuc/347379780_259788799881356_7984439537715342922_n.jpg" style="height:267px; width:400px"></p>
    
        <div class="fb-like" data-href="http://www.hepco.com.vn/" data-width="" data-layout="standard" data-action="like" data-size="small" data-show-faces="true" data-share="true">
        </div>`},
    {date: '29-12-2023',id : '1', author: 'Admin', image: "/assets/images/banner2.jpg", group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 1", content: "content socontent socontent socontent socontent socontent so 1"},
    {date: '29-12-2023',id : '2', author: 'Huy', image: "/assets/images/banner3.jpg", group_id: '2', title :"tin tuc so tin tuc so tin tuc so tin tuc so 2", content: "content socontent socontent socontent socontent socontent so 2"},
    {date: '29-12-2023',id : '3', author: 'Quan', image: "/assets/images/banner4.jpg", group_id: '3', title :"tin tuc so tin tuc so tin tuc so tin tuc so 3", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 3"},
    {date: '28-12-2023',id : '4', author: 'Dat', image: "/assets/images/banner5.jpg", group_id: '4', title :"tin tuc so tin tuc so tin tuc so tin tuc so 4", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 4"},
    {date: '28-12-2023',id : '5', author: 'Admin', image: "/assets/images/mission.jpg", group_id: '4', title :"tin tuc so tin tuc so tin tuc so tin tuc so 5", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 5"},
    {date: '28-12-2023',id : '6', author: 'Admin', image: "/assets/images/mission2.jpg", group_id: '4', title :"tin tuc so tin tuc so tin tuc so tin tuc so 6", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 6"},
    {date: '27-12-2023',id : '7', author: 'Admin', image: "/assets/images/1.jpg", group_id: '2', title :"tin tuc so tin tuc so tin tuc so tin tuc so 7", content: "content socontent socontent socontent socontent socontent so 7"},
    {date: '27-12-2023',id : '8', author: 'Admin', image: "/assets/images/1.jpg", group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 8", content: "content socontent socontent socontent socontent socontent so 8"},
    {date: '26-12-2023',id : '9', author: 'Admin', image: "/assets/images/1.jpg", group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 9", content: "content socontent socontent socontent socontent socontent so 9"},
    {date: '26-12-2023',id : '10',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 10", content: "content socontent socontent socontent socontent socontent so 10"},
    {date: '26-12-2023',id : '11',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '3', title :"tin tuc so tin tuc so tin tuc so tin tuc so 11", content: "content socontent socontent socontent socontent socontent so 11"},
    {date: '25-12-2023',id : '12',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '3', title :"tin tuc so tin tuc so tin tuc so tin tuc so 12", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 12"},
    {date: '24-12-2023',id : '13',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '3', title :"tin tuc so tin tuc so tin tuc so tin tuc so 13", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 13"},
    {date: '24-12-2023',id : '14',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '4', title :"tin tuc so tin tuc so tin tuc so tin tuc so 14", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 14"},
    {date: '22-12-2023',id : '15',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 15", content: "content socontent socontent socontent socontent socontentcontent socontent socontent socontent socontent socontent so 15"},
    {date: '21-12-2023',id : '16',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 16", content: "content socontent socontent socontent socontent socontent so 16"},
    {date: '21-12-2023',id : '17',author: 'Admin', image: "/assets/images/1.jpg",  group_id: '1', title :"tin tuc so tin tuc so tin tuc so tin tuc so 17", content: "content socontent socontent socontent socontent socontent so 17"},
]


export default function NewsContent({pageParam}) {
    const theme = useTheme()
    const {t} = useTranslation()
    const [page, setPage] = useState(1);
    const [dataNews, setDataNews] = useState(news)
    const [valueFilter, setValueFilter] = useState([])
    const [keyword, setKeyword] = useState('')
    const newsNewest = news.slice(0, 5)
    const categories = {
        '1': {name: t('Hoạt động công ty'), value:'1'},
        '2': {name: t('Đảng Đoàn thể'), value:'2'},
        '3': {name: t('Pháp luật môi trường'), value:'3'},
        '4': {name: t('Tin tức khác'), value:'4'},
    }
    const itemsPerPage = 9; // Change this according to your needs



    // Calculate the total number of pages
    const totalPages = Math.ceil(dataNews.length / itemsPerPage);

    // Get the current page's data
    const startIndex = (page - 1) * itemsPerPage;
    const endIndex = page * itemsPerPage;
    const currentPageData = dataNews.slice(startIndex, endIndex);

    // Handle page change
    const handlePageChange = (event, value) => {
        setPage(value);
    };
    const handleFilter = () =>{
        let value = valueFilter.map((option)=> option.value)
        if(value?.length > 0){
            const newsFilter = news.filter((news)=>{
              return value.indexOf(news.group_id) > -1
            })
            setDataNews(newsFilter)
        }else{
            setDataNews(news)
        }
        setPage(1)
    }
    const handleSearch = ()=>{
        let value = valueFilter?.map((option)=> option.value)
        let data = []
        if(value?.length > 0){
            const newsFilter = news.filter((news)=>{
              return value.indexOf(news.group_id) > -1
            })
            data = newsFilter
        }else{
            data = news
        }
        if(keyword?.length > 0){
            const newsSearch= data.filter((news)=>{
              return slugify(news.title.toLowerCase()).indexOf(slugify(keyword.toLowerCase())) > -1
            })
            data = newsSearch
        }
        setDataNews(data)
        setPage(1)
    }

    useEffect(()=>{
        handleSearch()
    },[keyword, valueFilter])
    return (
        <Container 
            maxWidth={'xl'} 
            sx={{
                marginTop:theme.spacing(5),
                marginBottom:theme.spacing(10),
            }} 
        >
            <Grid container spacing={2}>
                <Grid item container spacing={3} xs={12} md={9}>
                    <Grid item xs={12} spacing={2}>
                        <Box sx={{padding: theme.spacing(2),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', height:'100%', width:'100%'}}>
                            <Grid container spacing={2}>
                                <Grid item xs={4}>
                                    <Typography fontWeight={500} sx={{marginBottom: theme.spacing(1)}}>{t("Loại tin tức")}</Typography>
                                    <Autocomplete
                                        multiple
                                        options={Object.values(categories)}
                                        getOptionLabel={(option) => option.name}
                                        value={valueFilter}
                                        renderInput={(params) => (
                                            <TextField
                                                {...params}
                                                variant="outlined"
                                                placeholder={t("Chọn loại tin tức để lọc")}
                                            />
                                        )}
                                        onChange={(e,value)=>{
                                            setValueFilter(value)
                                        }}
                                    />
                                </Grid>
                                <Grid item xs={8}>
                                    <Typography fontWeight={500} sx={{marginBottom: theme.spacing(1)}}>{t("Tìm kiếm")}</Typography>
                                    <TextField placeholder={t("Nhập từ khoá để tìm kiếm")} variant="outlined" value={keyword} fullWidth onChange={(e)=>{setKeyword(e.target.value)}}/>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                    {
                        
                        currentPageData.map((news) => {
                            const normalizedTitle = news.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
                            return(
                                <Grid key={news.id} item xs={12} sm={6} md={4}>
                                    <Link to={`/${t('tintuc')}/${normalizedTitle}.${news.id}`}>
                                        <FeaturedNewstWrap>
                                            <LazyLoad height={200} offset={100}>
                                            <FeaturedNewstImage image={news.image}>
                                                <Box
                                                    sx={{
                                                        // width: '20%',
                                                        px: theme.spacing(4),
                                                        py:theme.spacing(1),
                                                        background: theme.color.green1,
                                                        // aspectRatio: '0.9',
                                                        position: 'absolute',
                                                        borderRadius: '4px',
                                                        textAlign:'center',
                                                        bottom: '0',
                                                        left: '50%',
                                                        transform: 'translate(-50%, 20px)',
                                                        boxShadow:'0 5px 20px rgba(34,34,34,.1)'
                                                    }}
                                                >
                                                <Typography 
                                                    className='news-date' 
                                                    fontFamily={theme.typography.MuktaMahee}
                                                    color={theme.color.white}
                                                    fontWeight={700}
                                                >{news.date}</Typography>
                                                </Box>
                                            </FeaturedNewstImage>
                                            </LazyLoad>
                                            <Box
                                                sx={{padding:theme.spacing(4)}}
                                            >
                                            <Grid container spacing={1}>
                                                <Grid item xs={12} pb={1}>
                                                    <Typography variant="h6" color={theme.color.red} fontWeight={700}>{news.title}</Typography>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box sx={{display:'flex'}}>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>{news.author}</Typography>
                                                    <Typography paddingRight={1} color={theme.color.gray1} fontWeight={700}>-</Typography>
                                                    <Typography color={theme.color.gray1} fontWeight={700} >{categories?.[news.group_id]?.name}</Typography>
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12}>
                                                    <Box className='ck-content' dangerouslySetInnerHTML={{__html:news.content}} sx={{overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical'}}>
                                                    {/* <Typography fontWeight={500}>{news.content}</Typography> */}
                                                    </Box>
                                                </Grid>
                                                <Grid item>
                                                    <BlogButton>
                                                    <Link to="#">
                                                        <Typography fontWeight={700} lineHeight={'1.5rem'}>{t("Read more")}</Typography>
                                                        <Typography sx={{display:'inline', pl: '5px'}} className='arrow-news'><FontAwesomeIcon icon="fa-solid fa-arrow-right-long" /></Typography>
                                                    </Link>
                                                    </BlogButton>
                                                </Grid>
                                            </Grid>
                                            </Box>
                                        </FeaturedNewstWrap>
                                    </Link>
                                </Grid>
                            )
                        })
                    }
                    <Box sx={{width:'100%', marginTop: theme.spacing(10), display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <Pagination
                            variant="outlined" 
                            color="primary"
                            count={totalPages}
                            page={page}
                            onChange={handlePageChange}
                            boundaryCount={1} 
                            siblingCount={1}
                        />
                    </Box>
                </Grid>
                
                <Grid item container xs={12} md={3}>
                    <Box sx={{padding: theme.spacing(3),backgroundColor: theme.color.white, boxShadow:'0 5px 20px rgba(34,34,34,.1)', borderRadius: '10px', width:'100%', height: 'fit-content'}}>
                        <Typography sx={{marginBottom:theme.spacing(3)}} variant='h5' textAlign={"center"} fontWeight={700} color={theme.color.green1}>{t('Tin tức mới nhất')}</Typography>
                        {
                            newsNewest.map((newest)=>{
                                const normalizedTitle = newest.title.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');

                                return(
                                    <Box key={'news-newest'+newest.id} sx={{paddingBottom: theme.spacing(3)}}>
                                        <Link to={`/${t('tintuc')}/${normalizedTitle}.${newest.id}`}>
                                            <Grid container spacing={1}>
                                                <Grid item xs={3}>
                                                    <Card 
                                                        sx={{
                                                            width: '100%',
                                                            height: '100%',
                                                            // aspectRatio: '1',
                                                            display: 'flex',
                                                            flexDirection: 'column',
                                                            position:'relative'
                                                        }}
                                                    >
                                                            <CardMedia 
                                                                component="img"
                                                                alt={newest.title}
                                                                height="auto"
                                                                image={newest.image}
                                                                sx={{flex: 1,
                                                                objectFit: 'cover'}}
                                                            />
                                                    </Card>
                                                </Grid>
                                                <Grid item xs={9}>
                                                    <Box sx={{marginBottom:'5px',overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical'}}>
                                                        <Typography fontWeight={600}>{newest.title}</Typography>
                                                    </Box>
                                                    <Box sx={{display:'flex'}}>
                                                        <AccessTimeFilledIcon fontSize={'13px'} color="disabled"/>
                                                        <Typography sx={{marginLeft:'5px'}} fontWeight={600} fontSize={'13px'} color={theme.color.gray1}>{newest.date}</Typography>
                                                    </Box>
                                                </Grid>
                                            </Grid>
                                        </Link>
                                    </Box>
                                )
                            })
                        }
                    </Box>
                </Grid>
                
            </Grid>
        </Container>
  )
}


function slugify (str) {
	var map = {
		'a' : 'á|à|ả|ã|ạ|ă|ắ|ằ|ẳ|ẵ|ặ|â|ấ|ầ|ẩ|ẫ|ậ|À|Á|Ả|Ã|Ạ|Ă|Ắ|Ằ|Ẳ|Ẵ|Ặ|Â|Ấ|Ầ|Ẩ|Ẫ|Ậ',
		'e' : 'é|è|ẻ|ẽ|ẹ|ê|ế|ề|ể|ễ|ệ|É|È|Ẻ|Ẽ|Ẹ|Ê|Ế|Ề|Ể|Ễ|Ệ',
		'i' : 'í|ì|ỉ|ĩ|ị|î|Í|Ì|Ỉ|Ĩ|Ị',
		'o' : 'ó|ò|ỏ|õ|ọ|ơ|ớ|ờ|ở|ỡ|ợ|ô|ố|ồ|ổ|ỗ|ộ|Ó|Ò|Ỏ|Õ|Ọ|Ơ|Ớ|Ờ|Ở|Ỡ|Ợ|Ô|Ố|Ồ|Ổ|Ỗ|Ộ',
		'u' : 'ú|ù|ủ|ũ|ụ|ư|ừ|ứ|ử|ữ|ự|û|ü|Ú|Ù|Ủ|Ũ|Ụ|Ư|Ứ|Ừ|Ử|Ữ|Ự|Û|Ü',
		'c' : 'ç|Ç',
		'n' : 'ñ|Ñ',
		'd' : 'đ|Đ',
		'y' : 'ý|ỳ|ỷ|ỹ|ỵ|Ý|Ỳ|Ỷ|Ỹ|Ỵ'
	};
	for (var pattern in map) {
		str = str.replace(new RegExp(map[pattern], 'g'), pattern);
	};
	return str;
};
function convertPath(str) {
    return toSlug(str);
  }
  function toSlug(str) {
      // Chuyển hết sang chữ thường
      str = str.toLowerCase();     
   
      // xóa dấu
      str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
      str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
      str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
      str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
      str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
      str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
      str = str.replace(/(đ)/g, 'd');
   
      // Xóa ký tự đặc biệt
      str = str.replace(/([^0-9a-z\.-\s])/g, '');
   
      // Xóa khoảng trắng thay bằng ký tự -
      str = str.replace(/(\s+)/g, '-');
      
      // Xóa ký tự - liên tiếp
      str = str.replace(/-+/g, '-');
   
      // xóa phần dự - ở đầu
      str = str.replace(/^-+/g, '');
   
      // xóa phần dư - ở cuối
      str = str.replace(/-+$/g, '');
   
      // return
      return str;
  }