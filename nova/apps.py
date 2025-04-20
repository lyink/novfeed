from django.apps import AppConfig


class NovaConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'nova'
    
    def ready(self):
        """
        Import signals when the app is ready
        """
        import nova.signals  # Import the signals module