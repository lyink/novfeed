from django import forms
from .models import Comment

class CommentForm(forms.ModelForm):
    class Meta:
        model = Comment
        fields = ['name', 'email', 'body']
        widgets = {
            'name': forms.TextInput(attrs={'class': 'form-control', 'placeholder': 'Your Name'}),
            'email': forms.EmailInput(attrs={'class': 'form-control', 'placeholder': 'Your Email'}),
            'body': forms.Textarea(attrs={'class': 'form-control', 'placeholder': 'Your Comment', 'rows': 5}),
        }


class SearchForm(forms.Form):
    query = forms.CharField(
        widget=forms.TextInput(attrs={
            'class': 'form-control',
            'placeholder': 'Search in blog posts...'
        })
    )


    # forms.py
from django import forms
from .models import Enquiry

class EnquiryForm(forms.ModelForm):
    """Form for handling user enquiries"""
    
    # Add honeypot field to prevent spam
    honeypot = forms.CharField(required=False, 
                              widget=forms.HiddenInput(),
                              label="Leave this field empty")
    
    class Meta:
        model = Enquiry
        fields = ['name', 'email', 'phone', 'company', 'country', 
                 'product_interest', 'service_interest', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your Name*',
                'required': True,
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your Email*',
                'required': True,
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your Phone Number',
            }),
            'company': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your Company',
            }),
            'country': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Your Country',
            }),
            'product_interest': forms.Select(attrs={
                'class': 'form-control',
            }),
            'service_interest': forms.Select(attrs={
                'class': 'form-control',
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Your Message*',
                'rows': 5,
                'required': True,
            }),
        }
        error_messages = {
            'name': {
                'required': 'Please enter your name',
            },
            'email': {
                'required': 'Please enter your email address',
                'invalid': 'Please enter a valid email address',
            },
            'message': {
                'required': 'Please enter your message',
            },
        }
    
    def clean(self):
        """Custom form validation"""
        cleaned_data = super().clean()
        
        # Check honeypot field to prevent spam
        honeypot = cleaned_data.get('honeypot')
        if honeypot:
            # If honeypot field is filled, likely a bot
            raise forms.ValidationError(
                "Bot detected. If you are not a bot, please try again."
            )
        
        # Ensure at least product or service is selected
        product = cleaned_data.get('product_interest')
        service = cleaned_data.get('service_interest')
        
        if not product and not service:
            raise forms.ValidationError(
                "Please select at least one product or service of interest."
            )
        
        return cleaned_data