from django.shortcuts import render
from django.http import JsonResponse, HttpResponse
from django.views.decorators.csrf import csrf_exempt
from django.core.mail import send_mail
from django.conf import settings
import json
import os

def home(request):
    """Main portfolio page"""
    return render(request, 'base.html')

@csrf_exempt
def contact(request):
    """Handle contact form submissions"""
    if request.method == 'POST':
        try:
            data = json.loads(request.body)
            name = data.get('name')
            email = data.get('email')
            message = data.get('message')
            
            # Send email (configure your email settings in settings.py)
            subject = f'Portfolio Contact: {name}'
            email_message = f'From: {name} ({email})\n\nMessage:\n{message}'
            
            send_mail(
                subject,
                email_message,
                settings.DEFAULT_FROM_EMAIL,
                [settings.CONTACT_EMAIL],  # Add your email in settings
                fail_silently=False,
            )
            
            return JsonResponse({'success': True})
        except Exception as e:
            return JsonResponse({'success': False, 'error': str(e)})
    
    return JsonResponse({'success': False, 'error': 'Invalid request method'})

def download_resume(request):
    """Handle resume download"""
    try:
        # Path to your resume file
        resume_path = os.path.join(settings.MEDIA_ROOT, 'resume.pdf')
        
        if os.path.exists(resume_path):
            with open(resume_path, 'rb') as resume_file:
                response = HttpResponse(resume_file.read(), content_type='application/pdf')
                response['Content-Disposition'] = 'attachment; filename="Ibrahim_Imam_Resume.pdf"'
                return response
        else:
            return HttpResponse('Resume not found', status=404)
    except Exception as e:
        return HttpResponse(f'Error: {str(e)}', status=500)