# Memoir - A Simple Photo Gallery Using Cloudinary API

Memoir is an elegant, responsive photo gallery application built with Next.js and Cloudinary. It allows you to showcase your precious memories with a beautiful, modern interface featuring modal views, image carousels, and optimized image loading.

![Memoir Screenshot](public/flower.JPG)

## Features

- **Responsive Image Gallery**: Automatically adjusts to any screen size with a beautiful masonry layout
- **Modal Image Viewer**: Click on any image to view it in a larger modal
- **Image Carousel**: Navigate through images in the modal view
- **Optimized Image Loading**: Uses Next.js Image component with blur placeholders for optimized loading
- **Cloudinary Integration**: Dynamically fetches and displays images stored in your Cloudinary account

## Demo

Check out the live demo: [Memoir Demo](https://memoir.vercel.app)

## Getting Started

### Prerequisites

- Node.js 14.6.0 or newer
- A Cloudinary account ([Sign up for free](https://cloudinary.com/users/register/free))

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/furkanberkaycakmak/memoir.git
   cd memoir
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env.local` file in the root directory with your Cloudinary credentials:
   ```
   NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=your_cloud_name
   CLOUDINARY_API_KEY=your_api_key
   CLOUDINARY_API_SECRET=your_api_secret
   CLOUDINARY_FOLDER=your_folder_name
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

### Deploying to Vercel

The easiest way to deploy your Memoir app is to use [Vercel](https://vercel.com):

1. Push your code to a GitHub repository
2. Import your project into Vercel
3. Add your environment variables in the Vercel dashboard
4. Deploy!

## Customization

### Adding Your Own Images

To add your own images:

1. Upload your images to your Cloudinary account
2. Organize them in a folder (the same folder name you specified in CLOUDINARY_FOLDER)
3. The app will automatically fetch and display your images

### Changing the Header Image

Replace the `flower.JPG` file in the `public` directory with your own image, or update the image path in `pages/index.tsx`.

### Modifying the Theme

The project uses Tailwind CSS for styling. You can customize the look and feel by modifying the `tailwind.config.js` file.

## Technologies Used

- [Next.js](https://nextjs.org/)
- [React](https://reactjs.org/)
- [Cloudinary](https://cloudinary.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)

## Contributing

Contributions are welcome! Feel free to submit a pull request or open an issue.

## License

This project is open source and available under the [MIT License](LICENSE).

## Acknowledgements

- Created with love by [Furkan Berkay ÇAKMAK](https://instagram.com/furkanberkaycakmak)
- Inspired by memories that last forever