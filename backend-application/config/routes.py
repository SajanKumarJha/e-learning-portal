from config.settings.base_settings import app
from applications.user_management.routes import user_management
from applications.authentication.routes import authentication
from applications.roles_management.routes import roles_management
from applications.permission_management.routes import permissions_management
from applications.apis_management.routes import apis_management


app.include_router(apis_management)
app.include_router(authentication)
app.include_router(roles_management)
app.include_router(permissions_management)
app.include_router(user_management)

