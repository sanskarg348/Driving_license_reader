from .atri import Atri
from fastapi import Request, Response
import numpy as np
import cv2
import os
from yolov5.detect import run
from atri_utils import create_media_response
from PIL import Image

def init_state(at: Atri):
    """
    This function is called everytime "Publish" button is hit in the editor.
    The argument "at" is a dictionary that has initial values set from visual editor.
    Changing values in this dictionary will modify the intial state of the app.
    """
    pass

def handle_page_request(at: Atri, req: Request, res: Response):
    """
    This function is called whenever a user loads this route in the browser.
    """
    pass

def handle_event(at: Atri, req: Request, res: Response):
    """
    This function is called whenever an event is received. An event occurs when user
    performs some action such as click button.
    """
    if at.Upload1.onChange:
        if at.Upload1.io.files is not None:
            img = at.Upload1.io.files[0].file
            file_path = f'{os.path.dirname(os.path.realpath(__file__))}/new.jpeg'
            file_path2 = f'{os.path.dirname(os.path.realpath(__file__))}/new2.jpeg'
            s = img.read()
            img_np = cv2.imdecode(np.fromstring(s, np.uint8), cv2.IMREAD_COLOR)
            cv2.imwrite(file_path, img_np)
            bounding_box_img = run(data='yolov5/US_DL.yaml', weights='yolov5/best.pt', source=file_path)
            cv2.imwrite(file_path2, bounding_box_img)
            at.Image6.custom.src = create_media_response(file_path, mime_type='image/jpeg')
            at.Image8.custom.src = create_media_response(file_path2, mime_type='image/jpeg')


