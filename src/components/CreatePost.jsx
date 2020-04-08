import React, { Component } from 'react';
import axios from 'axios';


const maxFileSize = 5000000;

const imageFileRegex = /\.(gif|jpg|jpeg|tiff|png)$/i;



class CreatePostScreen extends Component {

	state = {

		content: '',

		imageUrl: '',

    file: undefined,

    errorMessage: '',

	};



	handleContentChange = event => {

		this.setState({

			content: event.target.value

		});

  };

  

  handleFileChange = (event) => {

    const file = event.target.files[0];



    if (!imageFileRegex.test(file.name)) {

      this.setState({

        errorMessage: 'Invalid image file',

      });

    } else if (file.size > maxFileSize) {

      this.setState({

        errorMessage: 'File too large (Less than 5MB)',

      });

    } else {

      const fileReader = new FileReader();

      fileReader.readAsDataURL(file);

      fileReader.onload = () => {

        this.setState({

          errorMessage: '',

          file: file,

          imageUrl: fileReader.result,

        });

      };

    }

  };



  handleUploadPost = (event) => {
    event.preventDefault();
    var that = this;
    if (!this.state.file) {
        this.setState({
            errormessage: 'please upload image',
        })
    } else {
        try {
            const formData = new FormData();
            formData.append('image', this.state.file);
            
            axios({
                method: 'post',
                url: 'http://localhost:5000/uploads/photos',
                withCredentials: true,
                data: formData
            })
                .then(function (response) {
                    //handle success
                    axios({
                        method: 'post',
                        url: 'http://localhost:5000/posts/create-post',
                        withCredentials: true,
                        headers: {
                            "Content-Type": "application/json"
                        },
                        data: JSON.stringify({
                            imageUrl: response.data.data,
                            content: that.state.content,
                        }),
                    })
                        .then(function (response) {
                            //handle success  
                        })
                        .catch(function (error) {
                            //handle error
                            if (error)
                                console.log(error);
                        })
                })
                .catch(function (error) {
                    //handle error
                    if (error)
                        console.log(error);
                })

        }
        catch (error) {
            this.setState({
                errormessage: error.message,
            })
        }
        this.setState({
            errormessage: '',
        })
    }


}



	render() {

		return (

			<div>

				<div className="row">

					<div className="col-2"></div>

					<div className="col-8">

						<form className="mt-5" onSubmit={this.handleUploadPost}>

							<div className="form-group row">

								<label for="content" className="col-sm-2 col-form-label">

									Content <span className="text-danger">*</span>

								</label>

								<div className="col-sm-10">

									<textarea

										rows={8}

										type="password"

										className="form-control"

										id="content"

										placeholder="Description"

										value={this.state.content}

										onChange={this.handleContentChange}

									/>

								</div>

							</div>



							<div className="form-group row">

								<label for="image" className="col-sm-2 col-form-label">

									Image <span className="text-danger">*</span>

								</label>

								<div className="col-sm-10">

									<div className="custom-file">

										<input

											type="file"

											className="custom-file-input"

                      id="validatedCustomFile"

                      onChange={this.handleFileChange}

										/>

										<label

											className="custom-file-label"

											for="validatedCustomFile"

										>

											Choose file...

										</label>

									</div>

                  {this.state.imageUrl ? (

                    <div style={{

                      backgroundImage: `url(${this.state.imageUrl})`,

                      backgroundRepeat: 'no-repeat',

                      backgroundSize: 'cover',

                      backgroundPosition: 'center',

                      width: '100%',

                      height: '400px',

                      marginTop: '20px',

                    }}></div>

                  ) : null}

								</div>

							</div>



              {this.state.errorMessage ? (

                <div className="alert alert-danger" role="alert">

                  {this.state.errorMessage}

                </div>

              ) : null}



              <div style={{display: 'flex', justifyContent: 'center'}}>

                <input type='submit' value='Create' className='btn btn-primary' />

              </div>

						</form>

					</div>

					<div className="col2"></div>

				</div>

			</div>

		);

	}

}



export default CreatePostScreen;