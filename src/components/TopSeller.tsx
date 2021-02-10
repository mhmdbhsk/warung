import { Box, Button, makeStyles, Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import { Fragment } from 'react';
import { useCurrencyFormatter as currencyFormat } from '@hooks';

const styles = makeStyles((theme) => ({
  title: {
    fontWeight: 'bold',
  },
  helper: {
    color: theme.palette.primary.main,
    cursor: 'pointer',
  },
  card: {
    display: 'flex',
    flexGrow: 1,
    padding: theme.spacing(1.5, 2.5),
  },
  imageWrapper: {
    maxHeight: 80,
    maxWidth: 80,
    '@media (max-width:360px)': {
      maxHeight: 60,
      maxWidth: 60,
    },
  },
  image: {
    objectFit: 'cover',
  },
  buttonWrapper: {
    display: 'flex',
    flexDirection: 'column',
  },
  button: {
    textTransform: 'capitalize',
    height: 32,
    fontWeight: 'bold',
    padding: theme.spacing(0.5, 1.5),
    border: `1px solid ${theme.palette.primary.main}`,
    position: 'relative',
    bottom: 0,
    right: 0,
    '@media (max-width:360px)': {
      fontSize: '.75rem',
      padding: theme.spacing(0.5, 1),
    },
  },
  discountPercent: {
    color: '#fff',
    fontSize: '.75em',
  },
  discountPrice: {
    color: '#A6A6A6',
    textDecoration: 'line-through',
  },
}));

interface DataProps {
  id: number;
  name: string;
  category_id: number;
  category_name: string;
  stock_status: string;
  price: string;
  regular_price: string;
  sale_price: string | null;
  description: string;
  thumbnail_url: string;
}
interface CardProps {
  data: DataProps;
}

const topSeller = [
  {
    id: 3445,
    name: 'Ain Drop II',
    category_id: 43,
    category_name: 'Kesehatan',
    stock_status: 'instock',
    price: '75000',
    regular_price: '75000',
    sale_price: '60000',
    description:
      'Ain Drop adalah herba unik dari HPA yang Insya Allah, mengatasi beebagai masalah kesehatan mata.\r\n\r\nDengan ramuan yang diambil dari cairan pohon khusus dari pergunungan dingin Pakistan dan herba lainnya (diantaranya madu 4 musim), Ain Drop, berdasarkan pengalaman HPA bisa merawat kesehatan mata. Adapun penggunaan cairan khusus ini telah digunakan sejak ratusan tahun oleh masyarakat Pakistan.\r\n\r\nKhasiat Ain Drop II\r\n- rabun\r\n- mata merah\r\n- selaput mata\r\n- tekanan\r\n- sakit gigi\r\n- sakit saraf\r\n- katarak\r\n\r\nCara Penggunaan:\r\n\r\nTeteskan 1 tetes Ain Drop ke mata yang bermasalah pasa waktu pagi hari. Lakukan selama 5 hari berturut-turut.\r\n\r\nSetelah itu lakukan hal yang sama di bulan berikutnya. Jadi, dalam 1 bulan hanya digunakan selama 5 hari dalam sebulan.\r\n\r\nLakukan hal ini hingga Allah menyembuhkan mata Antum Insya Allah.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1535585209827-a15fcdbc4c2d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3470,
    name: 'AM-I',
    category_id: 43,
    category_name: 'Kesehatan',
    stock_status: 'instock',
    price: '350000',
    regular_price: '350000',
    sale_price: '150000',
    description:
      'AM-I: Herba yang tepat untuk perawatan DEMAM, AMANDEL, TUMOR\r\n\r\nApa saja tanda-tanda dan gejala amandel (tonsilitis)?\r\n\r\nGejala umum dari tonsilitis adalah :\r\n<ul>\r\n \t<li>Radang tenggorokan.</li>\r\n \t<li>Kesulitan atau sakit saat menelan.</li>\r\n \t<li>Suara yang serak.</li>\r\n \t<li>Batuk.</li>\r\n \t<li>Nafas bau.</li>\r\n \t<li>Kehilangan nafsu makan.</li>\r\n \t<li>Sakit kepala.</li>\r\n \t<li>Leher kaku.</li>\r\n \t<li>Nyeri pada rahang dan leher akibat pembengkakan kelenjar getah bening.</li>\r\n \t<li>Amandel yang tampak berwarna merah dan bengkak.</li>\r\n \t<li>Amandel yang memiliki bercak putih atau kuning.</li>\r\n \t<li>Kesulitan membuka mulut.</li>\r\n \t<li>Kelelahan.</li>\r\n</ul>',
    thumbnail_url:
      'https://images.unsplash.com/photo-1600857544200-b2f666a9a2ec?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3485,
    name: 'Baiduri Pak Haji',
    category_id: 43,
    category_name: 'Kesehatan',
    stock_status: 'instock',
    price: '130000',
    regular_price: '130000',
    sale_price: '70000',
    description:
      'Baiduri adalah herba kapsul HPA yang utamanya mengandung buah Bilberry. Buah berwarna biru gelap dan lembut ini sudah dikenal lama memberikan suplemen bagi mata. Di Eropa (dimana bilberi banyak tumbuh), bilberi sudah dikenal pemberi nutrisi bagi m ata sehingga mempertajam penglihatan, terutama di malam hari.\r\n<h2>Khasiat:</h2>\r\n<img class="emoji" role="img" draggable="false" src="https://s.w.org/images/core/emoji/13.0.0/svg/2705.svg" alt="✅" /> Menjauhkan anda dari penyakit mata seperti katarak\r\n<img class="emoji" role="img" draggable="false" src="https://s.w.org/images/core/emoji/13.0.0/svg/2705.svg" alt="✅" /> Memperbaiki pengelihatan kabur jarak dekat maupun jarak jauh\r\n<img class="emoji" role="img" draggable="false" src="https://s.w.org/images/core/emoji/13.0.0/svg/2705.svg" alt="✅" /> Merawat masalah silinder dan retina\r\n<img class="emoji" role="img" draggable="false" src="https://s.w.org/images/core/emoji/13.0.0/svg/2705.svg" alt="✅" /> Menjaga mata tetap sehat sehingga pengelihatan selalu jelas\r\n<img class="emoji" role="img" draggable="false" src="https://s.w.org/images/core/emoji/13.0.0/svg/2705.svg" alt="✅" /> Menjadikan pengelihatan tajam dan jauh dari pelemahan fungsi mata',
    thumbnail_url:
      'https://images.unsplash.com/photo-1612705166160-97d3b2e8e212?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3397,
    name: 'Bedak Nur',
    category_id: 34,
    category_name: 'Kecantikan',
    stock_status: 'instock',
    price: '105000',
    regular_price: '105000',
    sale_price: null,
    description:
      'BEDAK NUR adalah bedak khusus bagi para muslimah yang ingin mempercantik diri di hadapan suaminya secara alami. Bedak ini merupakan hasil penelitian yang telah dilakukan dan ditemukan ramuan khusus dari tumbuhan yang Insya Allah mujarab mengatasi flek hitam di wajah dan juga mengatasi masalah-masalah kulit lainnya.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1612705166546-641e59cef326?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80',
  },
  {
    id: 3297,
    name: 'Bedak Talcum Family',
    category_id: 43,
    category_name: 'Kesehatan',
    stock_status: 'instock',
    price: '22000',
    regular_price: '22000',
    sale_price: null,
    description:
      'Bedak Talcum bedak terbuat dari mineral yang mengandung beberapa zat seperti magnesium, silikon, dan oksigen. Yang dapat berfungsi untuk melembabkan membantu mengurangi nyeri pada luka gesekan dikulit, membantu mencegah terjadinya ruam, dan mampu mengurangi rasa gatal akibat keringat.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1602867005582-997b8dbf0813?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80',
  },
  {
    id: 3455,
    name: 'Black Salt',
    category_id: 48,
    category_name: 'Bumbu',
    stock_status: 'instock',
    price: '60000',
    regular_price: '60000',
    sale_price: null,
    description:
      'Black Salt merupakan jenis garam yang banyak digunakan pada masakan khas Asia Selatan (Bangladesh, India, Nepal dan Pakistan), contohnya pada <em>chaat masala</em>. Garam ini memiliki aroma khas seperti aroma sulfur pada telur rebus. Oleh para vegetarian, black salt digunakan untuk memberikan kamuflase rasa mirip telur pada masakan mereka.\r\n\r\nBlack salt sangat berkhasiat untuk memperbaiki sistem pencernaan dan memperbaiki sistem pembuangan feses. Masukkan garam ini ke dalam kopi untuk tujuan <em>deep sleeping</em> dan membuang kerak dalam usus (<em>colon cleansing</em>).',
    thumbnail_url:
      'https://images.unsplash.com/photo-1603923054647-887b2d34a2ee?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80',
  },
  {
    id: 3467,
    name: 'BTS Spray',
    category_id: 43,
    category_name: 'Kesehatan',
    stock_status: 'instock',
    price: '300000',
    regular_price: '300000',
    sale_price: null,
    description:
      'Beauty top Spray (BTS) Beauty face tanpa sedikit noda Di wajah selepas 1 minggu. InsyaAllah Semua penyakit Kulit juga bisa menggunakan BTS ini. Tiada produk bandingan sepertinya',
    thumbnail_url:
      'https://images.unsplash.com/photo-1586179743731-499b255c22b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80',
  },
  {
    id: 3419,
    name: 'Chendra Beuty',
    category_id: 34,
    category_name: 'Kecantikan',
    stock_status: 'instock',
    price: '450000',
    regular_price: '450000',
    sale_price: null,
    description:
      'Racikan terbaru dari master herbalis dunia buat kecantikan yaitu Chendra praktis dlm satu wadah ...\r\n\r\nHalal dan Aman buat diwajah lgsg glowing.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1585652757173-57de5e9fab42?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 3414,
    name: 'Coco Soap',
    category_id: 34,
    category_name: 'Kecantikan',
    stock_status: 'instock',
    price: '20000',
    regular_price: '20000',
    sale_price: null,
    description:
      'SABUN CHOCO SOAP Pak Haji, mengandung VCO, Cocoa, Collagen dan Olive Oil yang tinggi – Menghaluskan kulit. – Bubuk Kakao baik untuk Relaksasi – Mengandung Antioksidan. – Menjaga Kulit awet Muda.\r\n\r\nManfaat :\r\n<ul>\r\n \t<li>Sebagai antioksidan</li>\r\n \t<li>Aromaterapi</li>\r\n \t<li>Moisturizer/ pelembab alami.</li>\r\n</ul>\r\nTerbuat dari Cocoa dan VCO (Virgin Coconut Oil) COKLAT berkhasiat : antioxidan melindungi dari radikal bebas yg menyebabkan penuaan dini, melembutkan dan memutihkan kulit wajah dan tubuh, serta aromaterapi untuk mengembalikan mood. VCO berkhasiat : sebagai antioksidan pelindung alami, membantu melindungi tubuh dari radikal bebas berbahaya yang meningkatkan penuaan dini, mendukung keseimbangan kimiawi kulit secara alami, melembutkan kulit dan mengencangkan kulit dan lapisan lemak di bawahnya, mencegah keriput, kulit kendor dan bercak-bercak penuaan.',
    thumbnail_url:
      'https://images.unsplash.com/photo-1556756483-7bf188a604e2?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=634&q=80',
  },
  {
    id: 3417,
    name: 'Coffe Soap',
    category_id: 34,
    category_name: 'Kecantikan',
    stock_status: 'instock',
    price: '20000',
    regular_price: '20000',
    sale_price: '10000',
    description: '',
    thumbnail_url:
      'https://images.unsplash.com/photo-1584902673111-be205ff2eb32?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80',
  },
];

const TopSeller = () => {
  const classes = styles();
  return (
    <Fragment>
      <Paper elevation={0}>
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mx={2.5}
          mb={1}
        >
          <Typography variant="body1" className={classes.title}>
            Produk Terlaris
          </Typography>
          <Typography variant="body2" className={classes.helper}>
            Lihat Semua
          </Typography>
        </Box>
        <Box>
          {topSeller.map((item) => (
            <div key={item.id}>
              <Card data={item} />
            </div>
          ))}
        </Box>
      </Paper>
    </Fragment>
  );
};

const Card = ({ data }: CardProps) => {
  const classes = styles();
  const discount = (
    (Number(data.sale_price) / Number(data.regular_price)) *
    100
  ).toFixed(0);

  return (
    <Fragment>
      <Box className={classes.card}>
        <Box borderRadius={8} className={classes.imageWrapper}>
          <Image
            src={
              data.thumbnail_url
                ? data.thumbnail_url
                : `http://via.placeholder.com/40`
            }
            alt={data.name}
            width={80}
            height={80}
            className={classes.image}
          />
        </Box>
        <Box
          flexGrow={1}
          ml={2}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
          sx={{
            textOverflow: 'ellipsis',
            overflow: 'hidden',
          }}
        >
          <Typography variant="body1" noWrap>
            {data.name}
          </Typography>
          {data.sale_price && (
            <Box display="flex" alignItems="center">
              <Box px={1} py={0.5} mr={1} borderRadius={1} bgcolor="#EB4755">
                <Typography variant="body2" className={classes.discountPercent}>
                  {discount}%
                </Typography>
              </Box>
              <Typography variant="body2" className={classes.discountPrice}>
                {currencyFormat.format(Number(data.regular_price))}
              </Typography>
            </Box>
          )}
          <Typography variant="body2">
            {data.sale_price
              ? currencyFormat.format(Number(data.sale_price))
              : currencyFormat.format(Number(data.regular_price))}
          </Typography>
        </Box>
        <Box className={classes.buttonWrapper}>
          <Box flexGrow={1} width="100%" />
          <Button className={classes.button}>Tambah</Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default TopSeller;
