# Django Portfolio Website

A modern, responsive portfolio website built with Django, featuring clean design and smooth animations.

## Features

- **Responsive Design**: Mobile-first approach with breakpoints for all device sizes
- **Modern Navigation**: Collapsible hamburger menu for mobile devices
- **Smooth Animations**: Subtle animations and transitions throughout
- **Contact Form**: Functional contact form with email integration
- **Resume Download**: Direct resume download functionality
- **Skills Showcase**: Animated skill bars and project displays
- **SEO Optimized**: Proper meta tags and semantic HTML structure

## Project Structure

```
portfolio/
├── templates/
│   └── base.html              # Main template file
├── static/
│   ├── css/
│   │   ├── general.css        # General styles and components
│   │   ├── styles.css         # Main stylesheet
│   │   └── queries.css        # Responsive media queries
│   ├── js/
│   │   └── script.js          # JavaScript functionality
│   └── img/                   # Images and assets
├── portfolio/
│   ├── views.py               # Django views
│   ├── urls.py                # URL patterns
│   └── settings.py            # Django settings
└── media/
    └── resume.pdf             # Your resume file
```

## Setup Instructions

1. **Install Dependencies**
   ```bash
   pip install django
   ```

2. **Configure Settings**
   - Update `portfolio/settings.py` with your email credentials
   - Add your email for contact form submissions
   - Configure static and media file paths

3. **Add Your Content**
   - Replace placeholder images in `static/img/`
   - Add your resume PDF to `media/resume.pdf`
   - Update personal information in `templates/base.html`

4. **Run the Server**
   ```bash
   python manage.py runserver
   ```

## Customization

### Colors and Branding
- Primary color: `#e67e22` (orange)
- Secondary color: `#cf711f` (darker orange)
- Background: `#fdf2e9` (light cream)

### Responsive Breakpoints
- Mobile: `< 544px`
- Small tablets: `544px - 704px`
- Tablets: `704px - 944px`
- Landscape tablets: `944px - 1200px`
- Desktop: `> 1200px`

### Adding New Sections
1. Add HTML structure to `templates/base.html`
2. Add corresponding styles to `static/css/styles.css`
3. Add responsive styles to `static/css/queries.css`
4. Update navigation links

## Email Configuration

For the contact form to work, configure your email settings in `settings.py`:

```python
EMAIL_HOST_USER = 'your-email@gmail.com'
EMAIL_HOST_PASSWORD = 'your-app-password'
CONTACT_EMAIL = 'your-email@gmail.com'
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Features

- Optimized images with proper alt tags
- Efficient CSS with minimal redundancy
- JavaScript with intersection observers for animations
- Smooth scrolling with proper fallbacks

## Accessibility

- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly
- High contrast ratios

## License

This project is open source and available under the MIT License.